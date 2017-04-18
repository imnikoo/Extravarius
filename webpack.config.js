// const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
   devServer: {
      inline: true,
      contentBase: './src',
      port: 3001,
      historyApiFallback: true
   },
   devtool: 'cheap-eval-source-map',
   entry: './dev/js/index.js',
   module: {
      rules: [
         {
            test: /\.js$/,
            use: [
               'babel-loader', 'eslint-loader'
            ],
            exclude: [/node_modules/, /OLD/]
         },
         {
            test: /\.s?css/,
            use: ['style-loader', 'css-loader', 'sass-loader']
            /* use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: [
                  'css-loader', {
                     loader: 'postcss-loader',
                     options: {
                        plugins() {
                           return [ require('autoprefixer') ];
                        }
                     }
                  },
                  'sass-loader'
               ]
            })*/
         }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file-loader?name=public/fonts/[name].[ext]'
         }, {
            test: /\.(png|jpe?g)$/,
            use: [ 'base64-image-loader' ]
         }
      ]
   },
   output: {
      path: 'src',
      filename: 'js/bundle.min.js'
   },
   plugins: [
      // new ExtractTextPlugin('styles.css'),
      new webpack.DefinePlugin({
         'process.env': {
            'NODE_ENV': JSON.stringify('production')
         }
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.LoaderOptionsPlugin({
         options: {
            eslint: {
               configFile: '.eslintrc'
            }
         }
      })
        /* new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15})*/
   ]
};
