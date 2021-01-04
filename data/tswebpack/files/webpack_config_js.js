// 声明需要被创建的文件及其内容
const webpack_config_js = {
    filename: "webpack.config.js",
    content: `
const path = require('path');
const webpack = require('webpack');

const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool:'source-map',
  mode: "development",
  entry: './dist/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['./dist/index.js'],
      filename: 'index.html',
      template: './src/html/index.html'
    }),
  ],
}
`
};

module.exports = webpack_config_js;