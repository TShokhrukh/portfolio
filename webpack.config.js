const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const Dotenv = require('dotenv-webpack')

const IS_DEV = process.env.NODE_ENV === 'development'
const IS_PROD = process.env.NODE_ENV === 'production'

/** @type {import('webpack').Configuration} */
const configuration = {
  target: 'web',
  entry: path.resolve(__dirname, 'src/index.ts'),
  mode: process.env.NODE_ENV,
  devtool: IS_DEV && 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.((s[ac]ss)|(css))$/,
        use: [
          IS_PROD ? MiniCssExtractPlugin.loader : 'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: IS_DEV,
              resources: './src/scss/*.scss'
            }
          }
        ]
      },
      {
        test: /\.(svg|png)$/,
        loader: 'file-loader',
        options: {
          name: IS_DEV ? '[name].[contenthash].[ext]' : '[hash].[ext]',
          outputPath: './assets'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    plugins: [
      new TsconfigPathsPlugin()
    ],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].[contenthash].bundle.js',
    chunkFilename: 'js/[name].[contenthash].chunk.js',
    assetModuleFilename: IS_DEV ? './assets/[name].[contenthash][ext]' : './assets/[contenthash][ext]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      cache: true,
      template: './public/index.html',
      hash: IS_DEV,
      title: 'Document',
      options: {
        PUBLIC_PATH: '',
        NOSCRIPT_TEXT: 'You need to enable JavaScript to run this app.'
      },
      meta: {
        'theme-color': '#7B4AE2'
      },
      minify: IS_PROD
        ? {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
        : undefined
    }),
    new ForkTsCheckerWebpackPlugin(),
    new Dotenv(),
    new ESLintPlugin({
      extensions: ['.ts', '.tsx', '.json'],
      cache: true
    }),
    IS_PROD && (
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash].css',
        chunkFilename: 'css/[name].[hash].chunk.css'
      })
    ),
    new CopyPlugin({
      patterns: [
        {
          from: './public',
          globOptions: {
            dot: true,
            ignore: [
              '**.html'
            ]
          }
        }
      ]
    }),
    new CleanWebpackPlugin()
  ].filter(Boolean),
  optimization: {
    minimize: IS_PROD,
    minimizer: [
      new TerserPlugin()
    ],
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`
    },
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name (module, chunks, cacheGroupKey) {
            return IS_DEV ? `${cacheGroupKey}-${module.resourceResolveData.descriptionFileData.name}` : `${cacheGroupKey}.${module.buildInfo.hash}`
          },
          chunks: 'all'
        },
        styles: IS_PROD && ({
          name (module, chunks, cacheGroupKey) {
            return `${cacheGroupKey}-${module.buildInfo.hash}`
          },
          type: 'css/mini-extract',
          chunks: 'all',
          enforce: true
        })
      }
    }
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build')
    },
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
    liveReload: true
  }
}

module.exports = configuration
