var HtmlWebpackPlugin = require('html-webpack-plugin');





module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  

    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html' 
        })
   ]

}