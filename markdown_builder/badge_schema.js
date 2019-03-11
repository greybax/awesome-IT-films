const fs = require('fs');
const storage = require('../db/storage');

const movies = Object.keys(storage.MOVIES).length;
const docs = Object.keys(storage.DOCS).length;
const shows = Object.keys(storage.SHOWS).length;

let json = {
  "schemaVersion": 1,
  "label": "Movies/Docs/Shows",
  "color": "orange",
  "logo": "logos/logo_static.png",
  "message": `${movies}/${docs}/${shows}`
};

fs.writeFile('badge_endpoint.json', JSON.stringify(json), function (err) {
  if (err) throw err;
});
