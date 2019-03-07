# Steps for adding new film

Finally we added support for automatically keeping up-to-date movie ratings. See [issue #23](https://github.com/greybax/awesome-IT-films/issues/23) and big thanks to @perkinsjr who made it happens with [PR #63](https://github.com/greybax/awesome-IT-films/pull/63). So we've a changed a bit our adding new movie steps. See them below here.

1. To add new movies just add a movie to the **movies_prebuilt.md** with ⭐️ `Matrix_Score` under the title. 
2. Then in the **storage.js** add the `Matrix_Score` and the IMDB title id (e.x. `'tt0133093'` for matrix movie. This is the last thing in URI `https://www.imdb.com/title/tt4158110`) to the object.
3. Then run `npm run build-movies` and that will automatically go out and collect all the data and insert into the text file and then render a new **movies.md** file.

_**NOTE:**_ Same for **documentary_prebuilt.md** and **tv_series_prebuilt.md**. If you want to debug it locally you need to get api_key for `imdb-api` package. You can obtain one here: http://www.omdbapi.com/apikey.aspx

## Templates for adding film into `*_prebuilt.md` files

### Markdown

**tv_series_prebuilt.md**:
```
#### Matrix 
:star: Matrix_Score

> A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.

![Matrix](assets/matrix.jpg)
* Year: 1999
* Country: USA, Australia
* [_IMDb_](https://www.imdb.com/title/tt0133093/)

   - The first time I watched this, I was absolutely amazed with the concept of it. The action is just so amazing to watch. I've seen this film couple times and each time it just gets better. If you like sci fi action films then this is the film for you.
([@greybax](https://github.com/greybax))
```

### JS file

**storage.js**
```
const MOVIES = {
    "Matrix_Score": "tt0133093",
....
}
...
```

## Please note

 - DO NOT change `movies.md`, `tv_series.md` and `documentary.md`. They are generating by scripts see package.json
 "scripts" section for it.
 - Any film from this collection should be somehow related with programmers, developers, hackers, geeks (describe developers life, mentions about any of programming languages, IT technologies, etc..)
 - Layouts for the `movies.md`, `tv_series.md` and `documentary.md` are grouped by .5 ratings.
 - Each movie now has its own rating under the title.
 - Films should be sorted by ratings **desc**
 - If rating category doesn't exist for your film please add it.
 - Spaces in movie title should be replaced by `_` in file name. All letters are lowercase. (Mr Robot -> mr_robot.jpg)
 - Your comments could be placed after link movie info and have to starts from **4 spaced before "`-`" sign** (sub 2nd level list). After your comment please add link to your profile.
