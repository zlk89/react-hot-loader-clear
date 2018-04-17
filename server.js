var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.babel');


// console.log(JSON.stringify(webpackConfig, null, 2));
const compiler = webpack(webpackConfig);
const server = new WebpackDevServer(compiler);
server.listen(3000);