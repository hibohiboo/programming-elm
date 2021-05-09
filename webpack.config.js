/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const MODE = ['dev', 'serve'].includes(process.env.npm_lifecycle_event)
  ? 'development'
  : 'production'

const elmRuleBase = {
  test: /\.elm$/,
  exclude: [/elm-stuff/, /node_modules/],
  use: [],
}

const elmRule =
  MODE === 'development'
    ? {
        ...elmRuleBase,
        use: [
          { loader: 'elm-hot-webpack-loader' },
          {
            loader: 'elm-webpack-loader',
            options: {
              debug: true,
            },
          },
        ],
      }
    : {
        ...elmRuleBase,
        use: [
          {
            loader: 'elm-webpack-loader',
            options: {
              optimize: true,
            },
          },
        ],
      }

module.exports = {
  mode: MODE,
  entry: './src/entry/index.ts',
  devtool: 'source-map', // 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false },
          },
        ],
      },
      elmRule,
    ],
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js'], //  .jsがないと、Can't resolve 'xxxx' が発生する
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './public/template.html'),
      filename: 'index.html',
    }),
  ],
}
