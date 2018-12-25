var webpack = require('webpack');

module.exports = {
    //插件项
    plugins: [
        new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
    ],
    //页面入口文件配置
    entry: {
        index : './js/main.js'
    },
    //入口文件输出配置
    output: {
        path: __dirname +'/dist/',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    }
};