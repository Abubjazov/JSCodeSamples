const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')

let personalMovieDB ={
    count: numberOfFilms,
    movies: {}, 
    actors: {}, 
    genres: [], 
    privat: false 
}

for (let i = 0; i < 2; i++) {
    let movie = '',
        grade = ''

    while (movie === '' || movie === null || movie.length > 10) {
        movie = prompt('Один из последних просмотренных фильмов?')
    }

    while (grade === '' || grade === null || grade.length > 10) {
        grade = prompt('На сколько оцените его?')
    }

    personalMovieDB.movies[movie] = grade    
}

console.log(personalMovieDB.movies)

if (personalMovieDB.count !== null && !isNaN(personalMovieDB.count) && personalMovieDB.count !== '') {

    if (+personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов')
        } else if (+personalMovieDB.count >= 10 && +personalMovieDB.count < 30) {
            alert('Вы классический зритель')
        } else {
            alert('Вы киноман')
        }

} else {
    alert('Произошла ошибка!')
}
