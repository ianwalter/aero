const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const glob = require('glob')
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const site = path.join(__dirname, 'site')

module.exports = (_, { mode = 'development' }) => {
  const isProduction = mode === 'production'
  return {
    mode,
    entry: './site/main.js',
    output: {
      path: path.join(site, 'dist'),
      filename: `js/[name].[${isProduction ? 'contenthash' : 'hash'}].js`,
    },
    optimization: {
      minimizer: [
        new TerserJSPlugin(),
        new OptimizeCSSAssetsPlugin()
      ]
    },
    resolve: {
      extensions: ['.mjs', '.js', '.svelte', '.json']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin([{ from: 'font', to: 'font' }]),
      new HtmlWebpackPlugin({ template: 'site/index.html' }),
      new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash].css' }),
      new PurgecssPlugin({ paths: glob.sync(path.join(site, '**/*.svelte')) })
    ],
    module: {
      rules: [
        { test: /\.js$/, include: site, loader: 'babel-loader' },
        {
          test: /\.svelte$/,
          include: site,
          loader: 'svelte-loader',
          options: {
            hotReload: false,
            emitCss: true
          }
        },
        {
          test: /\.css$/,
          include: site,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: { hmr: !isProduction }
            },
            'css-loader',
            'postcss-loader'
          ]
        }
      ]
    },
    devServer: {
      port: 9876,
      hot: true,
      historyApiFallback: true,
      disableHostCheck: true
    }
  }
}
