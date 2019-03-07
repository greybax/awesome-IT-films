const fs = require('fs');
const imdb = require('imdb-api');
const storage = require('../db/storage');
const keys = Object.keys(storage.SHOWS);
require('dotenv').load();

fs.readFile('./db/tv_series_prebuilt.md', 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  }
  for (const key of keys) {
    imdb
      .get({ id: storage.SHOWS[key] }, { apiKey: process.env.api_key, timeout: 30000 })
      .then(movie => {
        data = data.toString().replace(key, movie.rating);
        fs.writeFile('./tv_series.md', data, 'utf8', (err) => {
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
