// @ts-nocheck
module.exports = {
    entry: "./src/index.tsx",
    target: 'node',
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            {
                test: /\.node$/,
                use: 'node-loader'
            },
        ]
    },
    externals: [{
        blessed: 'blessed', 
        ws: 'ws', 
        ReactDevTools: 'react-devtools-core', 
        ReactReconciler: 'react-reconciler'
    }]
};
