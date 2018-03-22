var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
const ENV = process.env;
const DOMAIN_API = process.env.NODE_ENV = process.env.DOMAIN_API = 'https://mysterious-reaches-49012.herokuapp.com';

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [{
      test: /\.ts$/,
      use: 'tslint-loader',
      enforce: 'pre',
    }, {
      test: /\.ts$/,
      use: ['awesome-typescript-loader', 'angular2-template-loader']
    },
    {
      test: /\.html$/,
      use: 'html-loader'
    },
    {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
      use: 'file-loader?name=public/[name].[hash].[ext]'
    },
    {
      test: /\.css$/,
      exclude: helpers.root('src', 'app'),
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?sourceMap'
      })
    },
    {
      test: /\.css$/,
      include: helpers.root('src', 'app'),
      use: ['to-string-loader', 'css-loader']
    },
    {
      test: /\.(sass|scss)$/,
      include: helpers.root('src'),
      use: ['to-string-loader', 'style-loader', 'css-loader', 'sass-loader']
    }
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      helpers.root('./src'),
      {}
    ),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'DOMAIN_API': JSON.stringify(DOMAIN_API)
      }
    }),
  ]
};
