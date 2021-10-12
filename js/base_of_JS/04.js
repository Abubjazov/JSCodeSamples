const personalMovieDB = {
        count: null,
        movies: {}, 
        actors: {}, 
        genres: [], 
        privat: false,
        start: function () {
            while (this.count === '' || this.count === null || isNaN(this.count)) {
                this.count = prompt('Сколько фильмов вы уже посмотрели?')
            }
        },
        rememberMyFilms: function () {
            for (let i = 0; i < 2; i++) {
                let movie = '',
                    grade = ''
            
                while (movie === '' || movie === null || movie.length > 10) {
                    movie = prompt('Один из последних просмотренных фильмов?')
                }
            
                while (grade === '' || grade === null || grade.length > 10) {
                    grade = prompt('На сколько оцените его?')
                }
            
                this.movies[movie] = grade    
            }
        },
        detectPersonalLevel: function () {
            if (this.count !== null && !isNaN(this.count) && this.count !== '') {
        
                if (+this.count < 10) {
                        alert('Просмотрено довольно мало фильмов')
                    } else if (+this.count >= 10 && +this.count < 30) {
                        alert('Вы классический зритель')
                    } else {
                        alert('Вы киноман')
                    }
            
            } else {
                alert('Произошла ошибка!')
            }
        },
        showMyDB: function () {
            !this.privat && console.log(this)
        },
        writeYourGenres: function () {
            for (let i = 0; i < 3; i++) {
                 let numb
             
                 while (numb === '' || numb === null || isNaN(numb)) {
                     numb = prompt('Ваш любимый жанр под номером...')
                 }
             
                this.genres.push(numb)  
             }
         
             console.log(this.genres.join(' '))
        }
    }

personalMovieDB.start()
// personalMovieDB.rememberMyFilms()
personalMovieDB.detectPersonalLevel()
// personalMovieDB.showMyDB()
// personalMovieDB.writeYourGenres()

// function start() {
//     while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
//         numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?')
//     }
// }

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         let movie = '',
//             grade = ''
    
//         while (movie === '' || movie === null || movie.length > 10) {
//             movie = prompt('Один из последних просмотренных фильмов?')
//         }
    
//         while (grade === '' || grade === null || grade.length > 10) {
//             grade = prompt('На сколько оцените его?')
//         }
    
//         personalMovieDB.movies[movie] = grade    
//     }
// }

// function detectPersonalLevel() {
//     if (personalMovieDB.count !== null && !isNaN(personalMovieDB.count) && personalMovieDB.count !== '') {

//         if (+personalMovieDB.count < 10) {
//                 alert('Просмотрено довольно мало фильмов')
//             } else if (+personalMovieDB.count >= 10 && +personalMovieDB.count < 30) {
//                 alert('Вы классический зритель')
//             } else {
//                 alert('Вы киноман')
//             }
    
//     } else {
//         alert('Произошла ошибка!')
//     }
// }

// function showMyDB() {
//     !personalMovieDB.privat && console.log(personalMovieDB)
// }

// function writeYourGenres() {
//    for (let i = 0; i < 3; i++) {
//         let numb
    
//         while (numb === '' || numb === null || isNaN(numb)) {
//             numb = prompt('Ваш любимый жанр под номером...')
//         }
    
//         personalMovieDB.genres.push(numb)  
//     }

//     console.log(personalMovieDB.genres.join(' '))
// }
