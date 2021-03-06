'use strict'

const path = require('path')
const webpack = require('webpack')
const JavaScriptObfuscator = require('webpack-obfuscator')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const core = [
  'vue', 'vuex', 'vue-router', 'vue-resource', 'vue-touch', 'vuex-router-sync', 'vue-i18n',
]

const vendors = [
  'moment',
]

module.exports = {
  entry: {
    main: './app/main.js',
    core,
    vendors,
  },
  output: {
    path: path.resolve(__dirname, './public/js'),
    publicPath: '/js/',
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js',
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /th/),
  ],
  module: {
    loaders: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, 'src-app'), path.resolve(__dirname, 'test')],
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(c|sa|sc)ss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
        loader: 'file-loader',
        query: {
          name: '[name].[ext]?[hash]',
        },
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    port: 3004,
    proxy: {
      '**': {
        target: 'http://localhost:9004',
      },
    },
    contentBase: './public',
    publicPath: '/js/',
  },
  devtool: 'eval-source-map',
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = 'source-map'
  module.exports.module.loaders.forEach((loader, i) => {
    if (loader.loader === 'style-loader!css-loader') {
      module.exports.module.loaders[i] = {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      }
    }
  })
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
    new JavaScriptObfuscator({
      rotateUnicodeArray: true,
    }, ['core.js', 'vendors.js']),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'core'], /* order desending */
      minChunks: Infinity,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({ filename: '../css/[name].min.css', allChunks: true }),
  ])
}
