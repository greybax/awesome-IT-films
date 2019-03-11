const fs = require('fs');
const storage = require('../db/storage');

const movies = Object.keys(storage.MOVIES).length;
const docs = Object.keys(storage.DOCS).length;
const shows = Object.keys(storage.SHOWS).length;

let json = {
  "schemaVersion": 1,
  "label": "Movies/Docs/Shows",
  "message": `${movies}/${docs}/${shows}`,
  "color": "orange"
};

fs.writeFile('badge_endpoint.json', JSON.stringify(json), function (err) {
  if (err) throw err;
});
