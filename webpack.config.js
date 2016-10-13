module.exports = {
  devtool: 'eval-source-map',

  entry:  __dirname + "/app/app",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  } 
}