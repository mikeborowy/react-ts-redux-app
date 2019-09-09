/* eslint-disable */
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../configs/webpack/webpack.config.dev');

const compiler = webpack(webpackConfig);
const colors = require('colors');
const path = require('path');
const open = require('open');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(cors());
app.use(webpackMiddleware(compiler, {
  noInfo: true,
  hot: true,
  publicPath: webpackConfig.output.publicPath,
}));
app.use(webpackHotMiddleware(compiler));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.log(`ERROR ${error}`.red);
  }
  else {
    open(`http://localhost:${port}`);
    console.log(`Dev Server is running at port:${port}.`.green);
  }
});
/* eslint-enable */
