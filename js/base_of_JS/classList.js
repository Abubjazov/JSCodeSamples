// const btns = document.querySelectorAll('button')

// console.log(btns[2].classList.length)
// console.log(btns[2].classList.item(0))
// btns[2].classList.add('red', 'blue')
// console.log(btns[2].classList.item(1))
// btns[2].classList.remove('red')
// console.log(btns[2].classList.item(1))
// btns[2].classList.toggle('red')
// console.log(btns[2].classList.item(1))
// btns[2].classList.toggle('red')
// console.log(btns[2].classList.item(1))

// if (btns[2].classList.contains('red')) {
//     console.log('RED')
// }

document.querySelector('.overlay').addEventListener('click', (e) => {
    e.preventDefault()

    // if (e.target && e.target.classList.contains('load__users')) {
    //     console.log('Производится загрузка пользователей')
    // } else {
    //     console.log('Неопознанная кнопка!!!')
    // }

    if (e.target && e.target.matches('.load__users')) {
        console.log('Производится загрузка пользователей')
    } else {
        console.log('Неопознанная кнопка!!!')
    }
})
