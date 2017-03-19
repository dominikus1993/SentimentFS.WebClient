const { FuseBox, SVGPlugin, CSSPlugin, BabelPlugin } = require("fuse-box");


// Create FuseBox Instance
let fuse = new FuseBox({
    homeDir: "src/",
    sourcemaps: true,
    outFile: "./public/bundle.js",
    plugins: [
        SVGPlugin(),
        CSSPlugin(),
        BabelPlugin()
    ]
});

fuse.bundle(">index.jsx");