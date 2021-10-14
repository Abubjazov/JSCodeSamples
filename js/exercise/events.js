const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
}


const movieList = document.querySelector('.promo__interactive-list'),
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

    const delItems = document.querySelectorAll('.delete')

    delItems.forEach(item => {
        item.addEventListener('click', e => {
            const delItem = e.target.parentElement.textContent.trim()
    
            let i = 0;
    
            while (i < movieDB.movies.length) {
                if (movieDB.movies[i].toUpperCase() === delItem.toUpperCase()) {
                    movieDB.movies.splice(i, 1);
                } else {
                    ++i;
                }
            }
    
            renderMovieDB()
        })
    })
}
      
addConfirmBtn.addEventListener('click', e => {
    e.preventDefault()

    addInput.value.length > 21 ? movieDB.movies.push(addInput.value.slice(0, 21) + '...') : movieDB.movies.push(addInput.value)

    const checkboxValue = document.querySelector('[type="checkbox"]').checked

    if ( checkboxValue ) console.log('Добавляем любимый фильм')

    renderMovieDB()
})

renderMovieDB()
