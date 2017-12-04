const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'index-horloge': './src/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/horloge.html',
      filename: 'horloge.html',
    }),
  ],
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
              }
            }]]
          }
        }
      }
    ]
  }
};
