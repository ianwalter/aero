const { join } = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (_, { mode = 'development' }) => ({
  mode,
  entry: './site/main.jsx',
  output: {
    path: join(__dirname, 'site/dist'),
    filename: 'js/[name].[contenthash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: 'site/index.html' }),
    ...(mode === 'production' ? [
      new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' })
    ] : [
      new webpack.HotModuleReplacementPlugin()
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(jsx?)$/,
        include: join(__dirname, 'site'),
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: '@fullhuman/purgecss-loader',
            options: {
              content: [join(__dirname, 'site/**/*.jsx')]
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('tailwindcss')('./tailwind.js'),
                require('autoprefixer')()
              ]
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 9876,
    contentBase: './site/dist',
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true
  }
})
