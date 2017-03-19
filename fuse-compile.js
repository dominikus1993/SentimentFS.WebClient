const { FuseBox, SVGPlugin, CSSPlugin, BabelPlugin, TypeScriptHelpers } = require("fuse-box");


// Create FuseBox Instance
let fuse = new FuseBox({
    homeDir: "src/",
    sourcemaps: true,
    outFile: "./public/bundle.js",
    plugins: [
        SVGPlugin(),
        CSSPlugin(),
        BabelPlugin(),
        TypeScriptHelpers()
    ]
});

fuse.bundle(">index.tsx");