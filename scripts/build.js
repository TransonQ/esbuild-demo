// scripts/build.js
require("esbuild")
  .build({
    entryPoints: ["main.ts"],
    outfile: "main.js",
    bundle: true,
    loader: { ".ts": "ts" },
  })
  .then(() => console.log("⚡ Done"))
  .catch(() => process.exit(1))
  
// node scripts/build.js