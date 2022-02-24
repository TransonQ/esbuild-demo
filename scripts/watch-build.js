// scripts/watch-build.js
require("esbuild")
  .build({
    entryPoints: ["main.ts"],
    outfile: "main.js",
    bundle: true,
    loader: { ".ts": "ts" },
    watch: true, // <--设置 watch 字段的值为 true
  })
  .then(() => console.log("⚡ Done"))
  .catch(() => process.exit(1))
