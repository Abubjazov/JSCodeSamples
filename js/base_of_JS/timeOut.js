// const summerTimer = setTimeout(() => {
//     console.log('Hello')
// }, 1000)

// const summerTimer2 = setTimeout((text) => {
//     console.log(text)
// }, 2000, 'Hello2')

// const summerTimer3 = setTimeout(sayHello, 3000, 'Hello3')


// clearInterval(summerTimer)
// clearTimeout(summerTimer2)

// const btn = document.querySelector('#btn_id')
// let summerTimer, i = 0

// const sayHello = (text) => {
//     i===3 && clearInterval(summerTimer)
//     console.log(text, i)
//     i++
// }

// btn.addEventListener('click', () => {
//     summerTimer = setInterval(sayHello, 500, 'Hello')
// })

// let id = setTimeout(function log() {
//     console.log('Hello')
//     id = setTimeout(log, 500)
// }, 500)

// const btn = document.querySelector('.btn')
// let timerId, i = 0

// function myAnimation() {
//     const elem = document.querySelector('.box')
//     let pos = 0

//     const id = setInterval(frame, 10)
//     function frame() {
//         if (pos === 300) {
//             clearInterval(id)
//             myAnimation2()
//         } else {
//             pos++
//             elem.style.top = pos + 'px'
//             elem.style.left = pos + 'px'
//         }
//     }
// }

// function myAnimation2() {
//     const elem = document.querySelector('.box')
//     let pos = 300

//     const id = setInterval(frame, 10)
//     function frame() {
//         if (pos === 0) {            
//             clearInterval(id)
//             myAnimation()
//         } else {
//             pos--
//             elem.style.top = pos + 'px'
//             elem.style.left = pos + 'px'
//         }
//     }
// }

document.querySelector('#start').addEventListener('click', myAnimation, {once: true})

const elem = document.querySelector('.box')
let   pos = 0

function myAnimation() {
    pos++
    elem.style.top = pos + 'px'
    elem.style.left = pos + 'px'
        
    if (pos === 300) {
        cancelAnimationFrame(myAnimation)
        requestAnimationFrame(myAnimationRev)
    } else {
        requestAnimationFrame(myAnimation)
    }
}

function myAnimationRev() {
    pos--
    elem.style.top = pos + 'px'
    elem.style.left = pos + 'px'
        
    if (pos === 0) {      
        cancelAnimationFrame(myAnimationRev)      
        requestAnimationFrame(myAnimation)
    } else {
        requestAnimationFrame(myAnimationRev)
    }
}
