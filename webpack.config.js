const { join } = require('path')

const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'
const site = join(__dirname, 'site')

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: './site/main.jsx',
  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': site
    }
  },
  plugins: [
    new CleanWebpackPlugin(['site/dist']),
    new HtmlWebpackPlugin({ template: 'site/index.html' })
  ],
  module: {
    rules: [
      { test: /\.(jsx?)$/, include: site, loader: 'babel-loader' }
    ]
  },
  devServer: {
    port: 8888
  }
}
