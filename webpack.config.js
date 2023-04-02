const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log('config')
module.exports = {

  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new MiniCssExtractPlugin()],

  // target: 'web',
  devServer: {
    allowedHosts: "all",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    // overlay:false,
    static: {
      directory: './dist',
    },
    // disableHostCheck: true,
    port: 4000,
    compress: true,
    hot: true,
    watchFiles: ['./src/**/*'],
  },

  // optimization: {
  //   runtimeChunk: 'single',
  // },

  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ]
      },
    ],
  },
};