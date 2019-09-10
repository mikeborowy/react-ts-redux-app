/* eslint-disable */
const webpack = require('webpack');
const path = require('path');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const cssNano = require('cssnano');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
 
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: [
      'webpack-hot-middleware/client',
      path.join(__dirname, '../../src'),
    ]
  },
  target: 'web',
  output: {
    path: '/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css', '.scss'],
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': '@hot-loader/react-dom',
    },
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: cssNano,
      cssProcessorOptions: {
        discardComments: {
          removeAll: true,
        },
      },
      canPrint: true,
    }),
  ],
  node: {
    net: 'empty',
    dns: 'empty',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            babelrc: true,
          },
        },
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /(node_modules)/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: {
              emitErrors: false,
              failOnError: false,
              failOnWarning: false,
            },
          },
        ],
      },
      {
        test: /\.json$/,
        exclude: /(node_modules)/,
        loader: 'json-loader',
      },
      // CSS Definitions
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /(node_modules)/,
        use: [
          { loader: "style-loader" },  // to inject the result into the DOM as a style block
          { loader: "css-modules-typescript-loader"},  // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
          { loader: "css-loader", options: { modules: true } },  // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
          { loader: "sass-loader" },  // to convert SASS to CSS
          // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
        ],
      },
      // Font Definitions
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /(node_modules)/,
        use: ['file-loader?limit=10000&mimetype=application&name=fonts/[name].[ext]'],
      },
      // Images
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)$/,
        exclude: /(node_modules)/,
        use: [
          'file-loader?mimetype=image&name=images/[name].[ext]',
        ],
      },
    ],
  },
};
/* eslint-enable */
