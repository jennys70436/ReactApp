const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  const isProdMode = argv.mode === 'production'
  const outputFolder = isProdMode ? 'dist' : 'dev'
  return {
    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
      path: path.join(__dirname, outputFolder),
      filename: 'scripts/bundle.[chunkhash].js',
      clean: true
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      modules: [
        'node_modules'
      ]
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react', '@babel/typescript']
            }
          }
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new CopyPlugin({
        patterns: [
          { from: 'src/images', to: 'images' }
        ]
      }),
      new MiniCssExtractPlugin({
        filename: isProdMode ? 'styles/[name].css' : 'styles/[name].[hash].css'
      }),
      new webpack.DefinePlugin({
        'process.env.MODE': JSON.stringify(argv.mode)
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, outputFolder)
      },
      hot: true,
      host: 'localhost',
      open: true,
      watchFiles: {
        options: {
          ignored: ['node_modules']
        }
      }
    },
    mode: argv.mode,
    devtool: 'source-map'
  }
}
