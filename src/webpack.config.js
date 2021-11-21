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
      // See https://github.com/webpack/webpack/issues/6784
      globalObject: "typeof self !== 'undefined' ? self : this",
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
      extensions: ['.vue', '.js', '.json'],
      /**
       * Note: this is a hack to make path to json files same in
       * the original source and in the bundle.
       * The bundle is under dist/emoji-mart.js, so to refer the
       * data files from it, the correct path is '../data/all.json'.
       * This alias makes data accessible under same path for
       * unminified sources.
       *
       * Before (in the original fork, json files were put into
       * the bundle, so it was quite big.
       * Probably the better solution is to do the same as the
       * oridinal react project does: it doesn't pack all the code
       * into the single bundle, it just compiles several versions
       * of code via babel (dist, dist-es and dist-modern) and
       * leaves packaging to the application that uses the component.
       * See https://github.com/missive/emoji-mart/blob/master/package.json.
       **/
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
