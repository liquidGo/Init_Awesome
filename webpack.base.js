const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader", "postcss-loader"]
      }, {
        test: /\.js$/i,
        use: ["babel-loader"],
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: ["file-loader"]
      },   {
        test: /\.(ts|tsx)?$/,
        use: ['ts-loader'],
        exclude: /node_modules/
    }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: "index.html",
      chunks: ['index'],
      favicon: './public/favicon.png'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.less'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
}