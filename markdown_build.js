const imdb = require('imdb-api')
const fs = require('fs')
const storage  = require('./db/storage')

const keys =  Object.keys(storage.MOVIES);

for (const key of keys) {
   imdb.get({id: storage.MOVIES[key]}, {apiKey: '', timeout: 30000}).then((movie) => {
    fs.readFile('./db/movies_prebuilt.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.indexOf(key);
        console.log(result);
        fs.writeFile('./movies.md', result, 'utf8', function (err) {
           if (err) return console.log(err);
        });
      });
}); 

  };

  console.log(keys.length)