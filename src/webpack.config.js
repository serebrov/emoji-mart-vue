var path = require('path')
var pack = require('../package.json')
var webpack = require('webpack')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

var PROD = process.env.NODE_ENV === 'production'
var TEST = process.env.NODE_ENV === 'test'

module.exports = Object.assign(
  {
    entry: path.resolve('src/index.js'),
    output: {
      path: path.resolve('dist'),
      filename: 'emoji-mart.js',
      library: 'EmojiMart',
      libraryTarget: 'umd',
    },

    externals: !TEST && [
      {
        vue: {
          root: 'Vue',
          commonjs2: 'vue',
          commonjs: 'vue',
          amd: 'vue',
        },
      },
      /^.*data\/.*\.json$/,
    ],

    module: {
      rules: [
        {
          test: /\.js$/,
          include: [path.resolve('src')],
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.vue$/,
          include: [path.resolve('src')],
          use: ['vue-loader'],
        },
        {
          test: /\.css$/,
          use: ['vue-style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        },
      ],
    },

    resolve: {
      extensions: ['.vue', '.js'],
    },

    plugins: [
      new webpack.DefinePlugin({
        EMOJI_DATASOURCE_VERSION: `'${
          pack.devDependencies['emoji-datasource']
        }'`,
      }),
      new VueLoaderPlugin(),
    ],

    bail: true,
  },
  !PROD
    ? {
        mode: 'development',
        devtool: 'inline-source-map',
        watch: true,
        devServer: {
          inline: true,
        },
      }
    : {
        mode: 'production',
      },
)
