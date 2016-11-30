const path = require('path');
module.exports = {
  context: __dirname,
  entry: './frontend/remember_the_bacon.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  devtool: 'source-maps'
};
