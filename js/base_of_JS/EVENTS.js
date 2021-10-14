// let i = 0
const overlay = document.querySelector('.overlay')


const clickE = e => {
    console.log(e.target)
    console.log(e.type)
    console.log(e.currentTarget)
    e.target.style.backgroundColor = 'red'
    // i++

    // if (i > 2) document.querySelector('#btn_id').removeEventListener('click', clickE)
    // (i > 2) && document.querySelector('#btn_id').removeEventListener('click', clickE)
    // (i > 2) ? document.querySelector('#btn_id').removeEventListener('click', clickE) : null
}

document.querySelector('#btn_id').addEventListener('click', clickE)
overlay.addEventListener('click', clickE)

const link  = document.querySelector('a')

link.addEventListener('click', event => {
    event.preventDefault()

    console.log(event.target.href)
})
