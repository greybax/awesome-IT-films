# Steps for adding new film

1. To add new films just add it accordingly to specific file **movies_prebuilt.md** or **documentary_prebuilt.md** or **tv_series_prebuilt.md** with ⭐️`Your_Adding_Film_Name_Score` under the title.
2. Then run `npm run build-all` and that will automatically go out and collect all the data and insert into the text file and then render a new **build/movies.md**, **build/documentary.md**, **build/tv_series.md** files.

## Template for adding film into `*_prebuilt.md` files

```
#### Matrix 
:star: Matrix_Score

> A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.

![Matrix](../assets/matrix.jpg)
* Year: 1999
* Country: USA, Australia
* [_IMDb_](https://www.imdb.com/title/tt0133093/)

   - The first time I watched this, I was absolutely amazed with the concept of it. The action is just so amazing to watch. I've seen this film couple times and each time it just gets better. If you like sci fi action films then this is the film for you.
([@greybax](https://github.com/greybax))
```

## Please note

 - If you want to run npm scripts locally you need to get api_key for `imdb-api` package. You can obtain one here: http://www.omdbapi.com/apikey.aspx
 - Any film from this collection should be somehow related with programmers, developers, hackers, geeks (describe developers life, mentions about any of programming languages, IT technologies, etc..)
 - DO NOT change **ANY** files under `build` directory. All these files generates automatically with `npm run build-all` command
 - Layouts for the `movies.md`, `tv_series.md` and `documentary.md` are grouped by .5 ratings.
 - Each movie has its own rating under the title.
 - Films should be sorted by ratings **desc**
 - If rating category doesn't exist for your film please add it.
 - Spaces in movie title should be replaced by `_` in file name. All letters are lowercase. (Mr Robot -> mr_robot.jpg)
 - Your comments could be placed after link movie info and have to starts from **4 spaced before "`-`" sign** (sub 2nd level list). After your comment please add link to your profile.
