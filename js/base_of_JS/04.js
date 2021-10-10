const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?')

let personalMovieDB ={
    count: numberOfFilms,
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false 
}

console.log(personalMovieDB)

let movie = prompt('Один из последних просмотренных фильмов?')
let grade = +prompt('На сколько оцените его?')

personalMovieDB.movies[movie] = grade

movie = prompt('Один из последних просмотренных фильмов?')
grade = +prompt('На сколько оцените его?')

personalMovieDB.movies[movie] = grade

console.log(personalMovieDB.movies)
