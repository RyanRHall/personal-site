module.exports = {
  context: __dirname + "/js",
  entry: "./root",
  output: {
      path: __dirname + "/js",
      filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx" ]
  },
  module: {
   loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
   },
   devtool: 'source-maps'
};
