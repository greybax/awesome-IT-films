const imdb = require("imdb-api");
require('dotenv').load();

imdb
  .get({ id: 'tt2390367' }, { apiKey: process.env.api_key, timeout: 30000 })
  .then(movie => {
    console.log(movie);
  });

