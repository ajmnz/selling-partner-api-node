const fs = require("fs");
const path = require("path");

(() => {
  const js = fs.readFileSync(path.join(__dirname, "../dist/SellingPartner.js"), "utf-8");
  const ts = fs.readFileSync(
    path.join(__dirname, "../dist/SellingPartner.d.ts"),
    "utf-8"
  );

  fs.writeFileSync(
    path.join(__dirname, "../dist/SellingPartner.js"),
    js.replace(/\.\/generated/g, ".")
  );

  fs.writeFileSync(
    path.join(__dirname, "../dist/SellingPartner.d.ts"),
    ts.replace(/\.\/generated/g, ".")
  );
})();
