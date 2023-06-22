/* eslint-disable wrap-regex */
const fs = require("fs");
const path = require("path");

const prettier = require("prettier");
const { generateApi } = require("swagger-typescript-api");

const prettierConfig = require("../.prettierrc.js");

function capitalize(str, lower = false) {
  return (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );
}

(async () => {
  const srcPath = path.join(__dirname, "../src");

  const toDelete = fs
    .readdirSync(srcPath)
    .filter(
      (p) =>
        ![
          "templates",
          "http-client.ts",
          "index.ts",
          "SellingPartner.ts",
          "SellingPartnerCore.ts",
          "types.ts",
        ].includes(p)
    );

  for (const p of toDelete) {
    fs.rmSync(path.join(srcPath, p), { force: true, recursive: true });
  }

  const modelsPath = path.join(__dirname, "../tmp-models");
  const modelDirs = fs.readdirSync(modelsPath);

  const models = {};

  for (const modelDir of modelDirs) {
    const modelFilenames = fs.readdirSync(path.join(modelsPath, modelDir));
    for (const modelFilename of modelFilenames) {
      if (!modelFilename.includes(".json")) {
        continue;
      }

      let cleanFilename = modelFilename.replace(".json", "");
      let version = null;

      if (modelFilename.includes("_")) {
        [cleanFilename, version] = modelFilename.replace(".json", "").split("_");
        version = `v${version.replace(/-/g, "")}`;
      } else if (/(V\d)$/.test(modelFilename.replace(".json", ""))) {
        version = modelFilename.replace(".json", "").match(/(V\d)$/)[0];
        cleanFilename = modelFilename.replace(".json", "").replace(version, "");
        version = version.toLowerCase();
      }

      models[cleanFilename] = {
        ...models[cleanFilename],
        [version]: path.join(modelsPath, modelDir, modelFilename),
      };
    }
  }

  const imports = [];
  const declarations = [];
  const instances = [];

  for (const modelName of Object.keys(models)) {
    const versions = models[modelName];
    const versionNames = Object.keys(versions);
    const baseDir = path.join(srcPath, modelName);
    const declaration = [];
    const instance = [];

    if (modelName === "fulfillmentOutbound") {
      // Temp fix until https://github.com/acacode/swagger-typescript-api/pull/515 is merged
      continue;
    }

    for (const version of versionNames) {
      let outputPath = path.join(baseDir, version);
      if (version === "null") {
        outputPath = baseDir;
      }

      const model = JSON.parse(fs.readFileSync(versions[version], "utf-8"));
      const result = await generateApi({
        output: outputPath,
        spec: model,
        httpClientType: "axios",
        templates: path.join(srcPath, "templates", "modular"),
        modular: true,
        singleHttpClient: true,
        unwrapResponseData: true,
        silent: true,
      });

      fs.rmSync(path.join(outputPath, "http-client.ts"), {
        recursive: true,
        force: true,
      });

      const typesFiles = result.files.filter(
        ({ name }) => !["data-contracts.ts", "http-client.ts"].includes(name)
      );

      if (!typesFiles.length) {
        throw new Error("Missing types file");
      }

      let i = 0;
      const indexContent = [];

      for (const typesFile of typesFiles) {
        const isFirst = i === 0;
        const content = typesFile.content.replace(
          /(?<=import .* from ")(\.\/http-client)(?=";)/,
          version === "null" ? "../http-client" : "../../http-client"
        );

        fs.writeFileSync(path.join(outputPath, typesFile.name), content);

        // Add index with exports

        if (isFirst) {
          indexContent.push('export * from "./data-contracts";');
        }

        const objectName = typesFile.name.replace(".ts", "");
        const importedClass = `${modelName}${
          version === "null" ? "" : version.toUpperCase()
        }${objectName}`.replace(/-/g, "");

        imports.push(
          `import { ${typesFile.name.replace(
            ".ts",
            ""
          )} as ${importedClass} } from "./${modelName}${
            version === "null" ? "" : `/${version}`
          }/${objectName}";`
        );

        if (version === "null") {
          declaration.push(`${importedClass}`);
          instance.push(`new ${importedClass}(this.httpClient)`);
        } else if (typesFiles.length === 1) {
          declaration.push(`${version}: ${importedClass}`);
          instance.push(`${version}: new ${importedClass}(this.httpClient)`);
        } else {
          declaration.push(`${version}${capitalize(objectName)}: ${importedClass}`);
          instance.push(
            `${version}${capitalize(objectName)}: new ${importedClass}(this.httpClient)`
          );
        }

        i++;
      }

      fs.writeFileSync(path.join(outputPath, "index.ts"), indexContent.join("\n") + "\n");
    }

    if (declaration.length === 1) {
      let classDeclaration = declaration[0];
      let classInstance = instance[0];

      if (declaration[0].includes(":")) {
        classDeclaration = classDeclaration.split(": ")[1];
        classInstance = classInstance.split(": ")[1];
      }

      declarations.push(`public ${modelName.replace(/-/g, "")}: ${classDeclaration};`);
      instances.push(`this.${modelName.replace(/-/g, "")} = ${classInstance};`);
    } else {
      let declarationObj = `public ${modelName}: { `;
      declarationObj += declaration.join(", ");
      declarationObj += ` };`;
      declarations.push(declarationObj);

      let instanceObj = `this.${modelName} = {`;
      instanceObj += instance.join(", ");
      instanceObj += ` };`;
      instances.push(instanceObj);
    }
  }

  const clientPath = path.join(srcPath, "SellingPartner.ts");
  const clientContent = fs.readFileSync(clientPath, "utf-8");
  let newContent = clientContent.replace(
    / {2}\/\/ Model declarations(.*?) {2}\/\/ End model declarations/s,
    ["// Model declarations", ...declarations, "// End model declarations"]
      .map((i) => `  ${i}`)
      .join("\n")
  );

  newContent = newContent.replace(
    /\/\/ Model imports(.*?)\/\/ End model imports/s,
    ["// Model imports", ...imports, "// End model imports"].join("\n")
  );

  newContent = newContent.replace(
    /\/\/ Model instances(.*?)\/\/ End model instances/s,
    [
      "// Model instances",
      ...instances.map((i) => `    ${i}`),
      "    // End model instances",
    ].join("\n")
  );

  newContent = prettier.format(newContent, { ...prettierConfig, parser: "typescript" });

  fs.writeFileSync(clientPath, newContent);
})();
