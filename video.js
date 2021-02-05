const util = require('util');
const fs = require('fs');
const path = require('path');


const readdirAsync = util.promisify(fs.readdir);
const readFileAsync = util.promisify(fs.readFile);

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function readVideoList() {
  const files = await readdirAsync(articlesPath);

  const articles = files
    .filter(file => path.extname(file) === '.mp4')
    .map(file => readArticle(`${path.join(articlesPath, file)}`));

  return Promise.all(articles);
}
