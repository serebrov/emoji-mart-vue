var path = require('path')
var pack = require('../package.json')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// var PROD = process.env.NODE_ENV === 'production'
// var TEST = process.env.NODE_ENV === 'test'

var config = {
  entry: path.resolve('docs/index.js'),
  output: {
    path: path.resolve('docs'),
    filename: 'bundle.js',
    library: 'EmojiMart',
    libraryTarget: 'umd',
  },

  externals: [],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve('src'),
          path.resolve('docs'),
        ],
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.vue$/,
        include: [
          path.resolve('src'),
          path.resolve('docs'),
        ],
        use: {
          loader: 'vue-loader',
        }
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      }
    ],
  },

  resolve: {
    extensions: ['.vue', '.js', '.json'],
    alias: {
      '../data': path.resolve(__dirname, '../data/'),
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      EMOJI_DATASOURCE_VERSION: `'${pack.devDependencies['emoji-datasource']}'`,
    }),
    new VueLoaderPlugin(),
  ],

  bail: true,

  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
      inline: true
  }
}

module.exports = config
