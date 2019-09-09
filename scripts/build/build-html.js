// This script copies src/index.html into /public/index.html
// This is a good example of using Node and cheerio to do a simple file transformation.
// In this case, the transformation is useful since we only use a separate css file in prod.
/* eslint-disable */
const fs = require('fs');             // Allows to write files
const cheerio = require('cheerio');   // Handy way to interact with VDOM using JQuery selectors
const colors = require('colors');

console.log('Generating minified bundle for production/distribution via Webpack. This will take a moment...\n'.underline.yellow);
console.log('Deploying html template'.bold.yellow);

fs.readFile('src/index.html', 'utf8', (error, markup) => {

  if (error) {
    console.log(`ERROR ${error}`.red);
    return returnHTMLFailComment();
  }
  const $ = cheerio.load(markup);
  // Since a separate spreadsheet is only utilized for the production build, need to dynamically add this here.
  $('head').prepend('<meta charset="utf-8">\n');
  $('head').prepend(`
    <link type="text/css" rel="stylesheet" href="../assets/styles.css">\n
    <link rel="shortcut icon" type="image/png" href="../images/favicon.png">\n
  `);
  $('body').find($('script'))
    .remove();
  $('#app').after();
  $('#app').after('<script src="../assets/app.js"></script>\n');

  fs.writeFile('public/index.html', $.html(), 'utf8', (error) => {
    if (error) {
      console.log(`ERROR ${error}`.red);
      return returnHTMLFailComment();
    }
    // If we got this far, the build succeeded.
    console.log(' ✓ Done'.green);
  });
});

function returnHTMLFailComment() {
  return console.log(' HTML failed to build\n'.red,'  BUILD FAILED  '.bold.bgRed.white);
}
/* eslint-enable */
