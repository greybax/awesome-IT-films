const imdb = require('imdb-api')
const fs = require('fs')
const storage  = require('./db/storage')

const keys = Object.keys(storage.MOVIES);

for (const key of keys) {
    console.log(key)

  };

  console.log(keys.length)

/*imdb.get({id: storage.MOVIES['Matrix_Score']}, {apiKey: 'key', timeout: 30000}).then((movie) => {
    fs.readFile('./db/movies_prebuilt.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(/Matrix_Score/g, movie.rating);
      
        fs.writeFile('./movies.md', result, 'utf8', function (err) {
           if (err) return console.log(err);
        });
      });
}); */