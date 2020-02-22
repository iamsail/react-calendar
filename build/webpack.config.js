const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      app: path.join(__dirname, './..', 'src/index.tsx')
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'build/tpl/index.html'
  })],
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js", '.jsx']
  },
  module: {
    rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: ['babel-loader', "ts-loader"]},
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.less$/,
          use: ['style-loader', 'css-loader', 'less-loader']
        }
    ]
  }
};