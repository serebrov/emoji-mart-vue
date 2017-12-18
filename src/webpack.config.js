var path = require('path')
var pack = require('../package.json')
var webpack = require('webpack')

var PROD = process.env.NODE_ENV === 'production';
var TEST = process.env.NODE_ENV === 'test';

module.exports = {
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'emoji-mart.js',
    library: 'EmojiMart',
    libraryTarget: 'umd',
  },

  externals: !TEST && [{
    'vue': {
      root: 'Vue',
      commonjs2: 'vue',
      commonjs: 'vue',
      amd: 'vue',
    },
  }],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve('src'),
          path.resolve('data'),
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [
          path.resolve('src'),
        ]
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline?removeSVGTagAttrs=false',
        include: [
          path.resolve('src/svgs'),
        ],
      }
    ],
  },

  resolve: {
    extensions: ['', '.js', '.vue'],
  },

  plugins: [
    new webpack.DefinePlugin({
      EMOJI_DATASOURCE_VERSION: `'${pack.devDependencies['emoji-datasource']}'`,
    }),
  ],

  bail: true,
}
