const fs = require("fs");
const path = require("path");

const outputDir = path.join(__dirname, "dist");
fs.mkdirSync(outputDir, { recursive: true });

const source = path.join(__dirname, "index.js");
const output = path.join(outputDir, "index.js");

fs.copyFileSync(source, output);
console.log("Build completed successfully. Output: dist/index.js");
