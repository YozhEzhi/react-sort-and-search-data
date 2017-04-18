const path = require('path');
const webpack = require('webpack-stream').webpack;

module.exports = {
  devtool: 'cheap-module-inline-source-map',
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel-loader'],
      include: path.join(__dirname, '../../js'),
      exclude: /node_modules/,
    }],
  },
};
