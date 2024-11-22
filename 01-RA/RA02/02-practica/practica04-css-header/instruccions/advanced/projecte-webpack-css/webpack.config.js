const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i, // Processa fitxers SASS i SCSS
        use: [
          isDevelopment
            ? 'style-loader' // Injecta CSS al navegador en mode desenvolupament
            : MiniCssExtractPlugin.loader, // Extreu CSS en mode producció
          'css-loader', // Traduir CSS en CommonJS
          'sass-loader', // Compilar SASS a CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/style.css', // Guarda el CSS a una subcarpeta
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new WebpackNotifierPlugin({
      title: 'Webpack',
      alwaysNotify: true,
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'), // Serveix fitxers des de la carpeta dist
    hot: true, // Activa Hot Module Replacement
    open: true, // Obre automàticament el navegador
    port: 8080, // Serveix al port 8080
  },
};
