module.exports = {
  context: __dirname,
  entry: "./js/entry.js",
  output: {
      path: __dirname + "/public",
      filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx", ".css", ".json" ]
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
      },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.json$/, loader: 'json' },
    ]
   },
   devtool: 'source-maps'
};
