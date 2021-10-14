document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    },
        movieList = document.querySelector('.promo__interactive-list'),
        addConfirmBtn = document.querySelector('.promo__interactive .add button'),
        addInput = document.querySelector('.promo__interactive .add input[type="text"]')

    const renderMovieDB = () => {
        movieDB.movies.sort()
        movieList.innerHTML = ''

        movieDB.movies.forEach((item) => {
            movieList.innerHTML += `
                <li class="promo__interactive-item">${item}
                    <div class="delete"></div>
                </li>
                `
        })

        document.querySelectorAll('.delete').forEach((item, index) => {
            item.addEventListener('click', () => {
                item.parentElement.remove()
                movieDB.movies.splice(index, 1)
        
                renderMovieDB()
            })
        })
    }

    const submitAddMovie = e => {
        e.preventDefault()

        if (addInput.value) {
            addInput.value.length > 21 
                ? movieDB.movies.push(addInput.value.slice(0, 21) + '...') 
                : movieDB.movies.push(addInput.value)
            
            if ( document.querySelector('[type="checkbox"]').checked ) console.log('Добавляем любимый фильм')

            renderMovieDB()

            e.target.reset()
        }
    }
        
    addConfirmBtn.addEventListener('click', submitAddMovie)
    renderMovieDB()
}) 
