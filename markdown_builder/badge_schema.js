const fs = require('fs');
const movies_storage = require('../build/movies_storage.json');
const documentary_storage = require('../build/documentary_storage.json');
const shows_storage = require('../build/shows_storage.json');

const movies = Object.keys(movies_storage).length;
const docs = Object.keys(documentary_storage).length;
const shows = Object.keys(shows_storage).length;

let json = {
  "schemaVersion": 1,
  "label": "Movies/Docs/Shows",
  "color": "brightgreen",
  "message": `${movies}/${docs}/${shows}`
};

fs.writeFile('badge_endpoint.json', JSON.stringify(json), function (err) {
  if (err) {
    throw err;
  }
});
