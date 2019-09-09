// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since this is a build file.
/* eslint-disable */
const webpack = require('webpack');
const webpackConfig = require('../../configs/webpack/webpack.config.prod');
const compiler = webpack(webpackConfig);
const colors = require('colors');
process.env.NODE_ENV = 'production';    // This assures the Babel dev config (for hot reloading) doesn't apply.

console.log('Deploying and minifying assets'.bold.yellow);

compiler.run((error, stats) => {

  if (error) {
    console.log(`ERROR ${error}`.red);
    return returnFailComment();
  }

  if (stats.hasWarnings()) {
    stats.toJson().warnings.map((warning) => {
      return console.log(`WARNNING: ${warning}`.yellow);
    });
    return returnFailComment();
  }

  if (stats.hasErrors()) {
    stats.toJson().errors.map((error) => {
      return console.log(`ERROR: ${error}`.red);
    });
    return returnFailComment();
  }

  // If we got this far, the build succeeded.
  console.log(' ✓ Done\n'.green);
  console.log('Webpack stats:'.bold.yellow, `\n${stats}`.dim);
  console.log('\n',' ✓ BUILD SUCCESSFUL  '.bold.green);
  console.log('\nYour app has been compiled in production mode and written to "/public" folder.\nIt\'s ready to roll!\n'.green);
});

function returnFailComment() {
  return console.log(' Wepack failed to build\n'.red,'  BUILD FAILED  '.bold.bgRed.white);
}
/* eslint-enable */
