const fs = require('fs');
const imdb = require('imdb-api');
const storage = require('../build/documentary_storage.json');
const keys = Object.keys(storage);
require('dotenv').load();

// update documentary_storage.js based on changes from documentary_prebuilt.md
fs.readFile('./documentary_prebuilt.md', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }

  let arrPrebuilds = data.split('####');
  for (let i = 1; i < arrPrebuilds.length; i++) {
    let name = arrPrebuilds[i].substring(arrPrebuilds[i].indexOf(':star:') + 7, arrPrebuilds[i].indexOf('_Score') + 6);
    if (storage[name] === undefined) {
      let val = arrPrebuilds[i].substring(arrPrebuilds[i].indexOf('[_IMDb_]'), arrPrebuilds[i].indexOf('/)')).split('/')[4];
      storage[name] = val;
    }
  }

  fs.writeFileSync('./build/documentary_storage.json', JSON.stringify(storage), 'utf8', (err) => {
    if (err) {
      return console.log(err);
    }
  });
});

// generate documentary.md
fs.readFile('./documentary_prebuilt.md', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  for (const key of keys) {
    imdb
      .get({ id: storage[key] }, { apiKey: process.env.api_key, timeout: 30000 })
      .then(movie => {
        data = data.toString().replace(key, movie.rating);
        fs.writeFile('./build/documentary.md', data, 'utf8', (err) => {
          if (err) {
            return console.log(err);
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
});
