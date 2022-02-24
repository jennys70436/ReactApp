const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, argv) => {
  const isProdMode = argv.mode === 'production'
  const outputFolder = isProdMode ? 'dist' : 'dev'
  return {
    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
      path: path.join(__dirname, outputFolder),
      assetModuleFilename: 'images/[hash][ext][query]',
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
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[hash][ext][query]'
          }
        },
        {
          test: /\.(json)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'data/[hash][ext][query]'
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new MiniCssExtractPlugin({
        filename: isProdMode ? 'styles/[name].css' : 'styles/[name].[hash].css'
      }),
      new webpack.DefinePlugin({
        API_SOURCE: JSON.stringify(env.apiSource)
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
