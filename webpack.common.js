const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    custtom: './src/custtom.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html',
      inject: 'body',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'custtom.html',
      template: './src/custom.html',
      inject: 'body',
      chunks: ['custtom'],
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|png|jpg|)$/,
        type: 'asset',
      },
      {
        test: /\.txt/,
        type: 'asset/source',
      },
    ],
  },
  devServer: {
    port: 4000,
  },
};
