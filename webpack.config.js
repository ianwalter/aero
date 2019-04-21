const { join } = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (_, { mode = 'development' }) => {
  const isProduction = mode === 'production'
  return {
    mode,
    entry: './site/main.jsx',
    output: {
      path: join(__dirname, 'site/dist'),
      filename: `js/[name].[${isProduction ? 'contenthash' : 'hash'}.js`
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        'react-dom': '@hot-loader/react-dom'
      }
    },
    plugins: [
      ...(isProduction ? [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' })
      ] : [
        new webpack.HotModuleReplacementPlugin()
      ]),
      new HtmlWebpackPlugin({ template: 'site/index.html' })
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
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            {
              loader: '@fullhuman/purgecss-loader',
              options: {
                content: [
                  join(__dirname, 'site/index.html'),
                  join(__dirname, 'site/**/*.jsx')
                ],
                whitelistPatterns: [/tippy/]
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
  }
}
