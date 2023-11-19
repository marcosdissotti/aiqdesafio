const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = (env) => ({
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  mode: isDevelopment ? 'development' : 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [__dirname, 'src', 'node_modules'],
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@contexts': path.resolve(__dirname, 'src/contexts'),
      '@utils': path.resolve(__dirname, 'src/utils')
    }
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public')
    },
    compress: true,
    port: 3000,
    historyApiFallback: true
  },
  plugins: [
    new Dotenv({
      path: `./.env.${env.production ? 'production' : 'development'}`
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  }
});
