const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const webpack = require('webpack'); 
var path = require('path');
module.exports = {
     resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
            path: path.join(__dirname, 'build')
          },
  module: {

    rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: ['babel-loader']
            },
            {
              test: /\.html$/,
              use: [
              {
              loader: "html-loader"
              }
            ]
            },
            {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
      modules: {
          localIdentName: "[name]__[local]___[hash:base64:5]",
      },                            
      sourceMap: true
  }




          },
          {
            loader: "less-loader"
          }
        ]
      }
            ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './public/index.html', filename:"index.html", overlay:true})
  ],
  devServer: {
    port: 3000
  }
};

