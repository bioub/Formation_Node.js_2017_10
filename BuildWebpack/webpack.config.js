const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => {
  const plugins = [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      template: './src/horloge.html',
      filename: 'horloge.html',
      minify: (env === 'prod') ? {
        collapseWhitespace: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
      } : false,
    }),
  ];

  if (env === 'prod') {
    plugins.push(new UglifyJSWebpackPlugin());
  }

  return {
    entry: {
      'index-horloge': './src/js/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js',
    },
    devtool: (env !== 'prod') ? 'source-map' : false,
    plugins,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              // plugins: ['transform-es2015-classes']
              presets: [['env', {
                targets: {
                  browsers: ['last 3 Chrome versions', 'IE 11']
                },
                modules: false,
              }]]
            }
          }
        },
        {
          test: /\.json5$/,
          loader: 'json5-loader',
        }
      ]
    }
  };
};
