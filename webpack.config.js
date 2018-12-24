const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//
const htmlWebpackPlugin=require('html-webpack-plugin');
// 配置文件就是一个 js 文件，通过 node 中的模块操作向外暴露一个配置对象
module.exports = {
    // 手动指定一个 入口 和 出口
    mode: 'development',
    entry: path.join(__dirname, './src/main.js'), /*入口表示要使用webpack打包那个文件*/
    output: {
        /*输出文件相关配置*/
        path: path.join(__dirname, './dist'), /*指定打包好的文件输出的目录*/
        filename: 'bundle.js'   /*指定输出文件的名称*/
    },
    //实现网页热更新，也可配置package.json实现
    // devServer:{
    //     contentBase:'./src',
    //     historyApiFallback:true,
    //     inline:true  //实时刷新
    // }
  plugins:[
    new htmlWebpackPlugin({
      template:path.join(__dirname,'./src/index.html'),
      filename:'index.html'
    }),
    new VueLoaderPlugin()

  ],
  module:{
      rules:[
        { test:/\.css$/,use:['style-loader','css-loader']},
        { test:/\.less$/,use:['style-loader','css-loader','less-loader']},
        { test:/\.(jpg|png|gif|jpeg)$/,use:'url-loader?limit=845941&name=[hash:8]-[name].[ext]'},
        //处理图片路径的loader,limit给定的值是图片的大小，单位是byte，如果图片大于或等于给定的limit的值，
      //  则不会被转为base64格式的字符串，否则会被转为base64的字符串
      //
        { test:/\.vue$/,use:'vue-loader'},
        { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },// 处理 字体文件的 loader
        { test:/\.js$/,use:'babel-loader',exclude:/node_modules/},//用来转换高级ES语法，排除node_modules,


      ]
  }
};
