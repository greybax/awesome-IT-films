const fs = require("fs");
const imdb = require("imdb-api");
const storage = require("../db/storage");
const keys = Object.keys(storage.DOCS);
require('dotenv').load();

fs.readFile("./db/documentary_prebuilt.md", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }
  for (const key of keys) {
    imdb
      .get({ id: storage.DOCS[key] }, { apiKey: process.env.api_key, timeout: 30000 })
      .then(movie => {
        data = data.toString().replace(key, movie.rating);
        fs.writeFile("./documentary.md", data, "utf8", function (err) {
          if (err) return console.log(err);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
});
