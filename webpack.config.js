module.exports = {
  entry: './app/components/index.js',
  output: {
    filename: 'public/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  }
};
