const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    // Generate sourcemaps for proper error messages
    devtool: 'source-map',
    // per https://github.com/serverless-heaven/serverless-webpack#node-modules--externals
    // aws-sdk doesn't need to be bundled via webpack b/c it's built-in to AWS Lambda
    externals: [nodeExternals() ],
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    optimization: {
        minimize: false
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                include: __dirname,
                exclude: /node_modules/
            }
        ]
    }
};