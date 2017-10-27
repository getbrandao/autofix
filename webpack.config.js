const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextWebpackPlugin({
  filename: '[name].[contenthash:8].bundle.css',
  disable: false,
});

const config = {
  entry: {
    main: './src/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].bundle.js',
    publicPath: '/', // informa ao webpack-dev-server onde deverá estar o bundle
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.json', '.sass', '.scss'],
    modules: [path.resolve(__dirname, 'node_modules')],
    alias: {
      modules: path.resolve(__dirname, 'node_modules'),
      jquery: path.resolve(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.min.js'),
      bootstrap: path.resolve(__dirname, 'node_modules', 'bootstrap', 'dist', 'js', 'bootstrap.min.js'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html',
      chunks: ['main'],
    }),
    extractSass,
  ],
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', 'react'],
          ],
          plugins: ['transform-object-rest-spread', 'transform-react-jsx'],
        },
        exclude: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.s[ac]ss$/,
        use: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          // use style-loader in development
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.css$/,
        use: extractSass.extract({
          use: [
            { loader: 'css-loader' },
          ],
          // use style-loader in development
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.woff|woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
        loader: 'file-loader',
      },
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  config.watch = true;
  config.devtool = 'source-map';
} else if (process.env.NODE_ENV === 'hot') {
  config.devtool = 'source-map';
  config.devServer = {
    port: 8080,
    contentBase: path.resolve(__dirname, 'public'),
    hot: true,
    compress: true,
    inline: true,
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
