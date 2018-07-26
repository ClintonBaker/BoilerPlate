import path from 'path';
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
import webpack from 'webpack';

export default {
  mode: 'production',
  devtool: 'source-map',
  entry: ['babel-polyfill', path.join(process.cwd(), 'src/index')],
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'public', 'js'),
    publicPath: '/js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new MiniCssExtractPlugin({
      filename: '../css/styles.css',
      chunkFilename: '[name].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-inline-environment-variables']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(css|styl)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]'
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              import: path.resolve(__dirname, '../src/styles/utils/index.styl')
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader'
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: 'file-loader'
      },
      {
        test: /\.(ttf|woff|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.css', '.styl'],
    alias: {
      '@comps': resolve(__dirname, '../src/comps'),
      '@styles': resolve(__dirname, '../src/styles'),
      '@utils': resolve(__dirname, '../src/utils'),
      '@packages': resolve(__dirname, '../src/packages'),
      '@scenes': resolve(__dirname, '../src/scenes'),
      '@store': resolve(__dirname, '../src/store')
    }
  },
  target: 'web'
};
