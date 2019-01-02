const webpack = require('webpack');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    //页面入口文件配置
    entry: {
        index : './js/main.js'
    },
    //入口文件输出配置
    output: {
        publicPath: "/",
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-[hash:5].bundle.js",
        chunkFilename: "[name]-[hash:5].chunk.js"
    },
    mode: "development", // 开发模式
    devtool: "source-map", // 开启调试
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8100, // 本地服务器端口号
        hot: true, // 热重载
        overlay: true, // 如果代码出错，会在浏览器页面弹出“浮动层”。类似于 vue-cli 等脚手架
        proxy: {
            // 跨域代理转发
            "/comments": {
                target: "https://m.weibo.cn",
                changeOrigin: true,
                logLevel: "debug",
                headers: {
                    Cookie: ""
                }
            }
        },
        historyApiFallback: {
            // HTML5 history模式
            rewrites: [{ from: /.*/, to: "/index.html" }]
        }
    },
    resolve: {
        alias: {
            jQuery$: path.resolve(__dirname, "src/vendor/jquery.min.js")
        }
    },
    //插件项
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
            chunks: ["index"]
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery", // npm
            jQuery: "jQuery" // 本地Js文件
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader" // 转化需要的loader
                    // options选项配置在: .babelrc
                    // options: {
                    //   ...
                    // }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // 将 JS 字符串生成为 style 节点
                    },
                    {
                        loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                    },
                    {
                        loader: "sass-loader" // 将 Sass 编译成 CSS
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "[name]-[hash:5].min.[ext]",
                            limit: 20000, // size <= 20KB
                            // publicPath: "static/",
                            // outputPath: "static/"
                        }
                    }
                ]
            }
        ]
    }
};