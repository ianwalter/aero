const { join } = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
    ...(mode === 'production' ? [] : [new webpack.HotModuleReplacementPlugin()])
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
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
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
