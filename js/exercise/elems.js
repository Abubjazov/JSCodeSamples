const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

document.querySelectorAll('.promo__adv img').forEach(e => e.remove())
document.querySelector('.promo__genre').textContent = 'ДРАМА'
document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")'
// document.querySelectorAll('.promo__interactive-item').forEach((item, index) => item.textContent = `${index + 1} ${movieDB.movies[index]}`)
const movieList = document.querySelector('.promo__interactive-list')

movieList.innerHTML = ''
movieDB.movies.sort()

movieDB.movies.forEach((item, index) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${index + 1} ${item}
            <div class="delete"></div>
        </li>
        `
})

// const html = []

// movieDB.movies.forEach((item, index) => {
//         html.push(`
//         <li class="promo__interactive-item">${index + 1} ${item}
//             <div class="delete"></div>
//         </li>
//         `)
// })

// movieList.innerHTML = html.join('')

// movieDB.movies.forEach((item, index) => {
//     movieList.insertAdjacentHTML('beforeend', 
//     `
//         <li class="promo__interactive-item">${index + 1} ${item}
//             <div class="delete"></div>
//         </li>
//     `)
// })
