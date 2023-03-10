/* eslint-disable wrap-regex */
const fs = require("fs");
const path = require("path");

const prettier = require("prettier");
const { generateApi } = require("swagger-typescript-api");

const prettierConfig = require("../.prettierrc.js");

(async () => {
  const srcPath = path.join(__dirname, "../src");

  fs.rmSync(path.join(srcPath, "generated"), { force: true, recursive: true });

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
    const baseDir = path.join(srcPath, "generated", modelName);
    const declaration = [];
    const instance = [];

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
      const typesFile = result.files.find(
        ({ name }) => !["data-contracts.ts", "http-client.ts"].includes(name)
      );
      if (!typesFile) {
        throw new Error("Missing types file");
      }

      const content = typesFile.content.replace(
        /(?<=import .* from ")(\.\/http-client)(?=";)/,
        version === "null" ? "../../http-client" : "../../../http-client"
      );

      fs.writeFileSync(path.join(outputPath, typesFile.name), content);

      const objectName = typesFile.name.replace(".ts", "");
      const importedClass = `${modelName}${
        version === "null" ? "" : version.toUpperCase()
      }${objectName}`;

      imports.push(
        `import { ${typesFile.name.replace(
          ".ts",
          ""
        )} as ${importedClass} } from "./generated/${modelName}${
          version === "null" ? "" : `/${version}`
        }/${objectName}";`
      );

      if (version === "null") {
        declaration.push(`${importedClass}`);
        instance.push(`new ${importedClass}(this.httpClient)`);
      } else {
        declaration.push(`${version}: ${importedClass}`);
        instance.push(`${version}: new ${importedClass}(this.httpClient)`);
      }
    }

    if (declaration.length === 1) {
      let classDeclaration = declaration[0];
      let classInstance = instance[0];

      if (declaration[0].includes(":")) {
        classDeclaration = classDeclaration.split(": ")[1];
        classInstance = classInstance.split(": ")[1];
      }

      declarations.push(`public ${modelName}: ${classDeclaration};`);
      instances.push(`this.${modelName} = ${classInstance};`);
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
