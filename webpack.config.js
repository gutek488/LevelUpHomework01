var HtmlWebpackPlugin = require('html-webpack-plugin');





module.exports = {
  
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: __dirname
    },
  
  watch: true,
  mode: 'production',
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
  

   

}