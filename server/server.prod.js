/* eslint-disable */
const colors = require('colors');
const express = require('express');
const webpack = require('webpack');
const path = require('path');
const open = require('open');
const compression = require('compression');
const cors = require('cors');

const port = 3030;

const app = express()
  .use(cors())
  .use(compression())
  .use(express.static('public'))
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })
  .listen(port, (error) => {
    if (error) {
      console.log(`ERROR ${error}`.red);
    }
    else {
      open(`http://localhost:${port}`);
      console.log(`Public Server is running at port:${port}.`.green);
    }
  });
  /* eslint-enable */

