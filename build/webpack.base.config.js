var path = require("path");
var webpack = require("webpack");
var helpers = require("./helpers.js");
// 常用的路径
var ROOT_PAHT = path.resolve(__dirname);
var APP_PAHT = path.resolve(ROOT_PAHT, 'entry');
var BUILD_PATH = path.resolve(ROOT_PAHT, 'dist');

module.exports = {
    entry: helpers.getEntry(),
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].js?v=[hash]',
        chunkFilename: 'js/[name].js?v=[hash]',
    },
    // 开启dev source map
    devtoolL: 'eval-source-map',
    // 开启webpack dev server
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        //定义模块缩写名称
        alias: {
            'common.scss': path.join(__dirname,'../src/assets/scss/common.scss'),
            'ui.scss': path.join(__dirname,'../src/assets/scss/ui.scss'),
            'flex.scss': path.join(__dirname,'../src/assets/scss/flex.scss'),
            'animate.scss': path.join(__dirname,'../src/assets/scss/animate.scss')
        },
        //resolve 指定可以被 import 的文件后缀
        extensions: ['', '.js', '.jsx']
    },
    module: {
        // 配置 loader, 将 Babel 添加进去
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader'
        }, {
            test: /\.(css)$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'url-loader?limit=1000&name=images/[name].[ext]',
            // 添加引用版本号
            query: "v=" + new Date().getTime()
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader?limit=1000&name=images/[name].[ext]',
            // 添加引用版本号
            query: "v=" + new Date().getTime()
        }]
    },
    // 配置plugin
    plugins: [

    ]
}
