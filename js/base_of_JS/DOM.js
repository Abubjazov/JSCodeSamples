let btn = document.getElementById('btn_id')

console.log(btn)

let btns = document.getElementsByTagName('button')

console.log(btns)
console.log(btns[0])

btn = document.getElementsByTagName('button')[1]

console.log(btn)

btns = document.getElementsByClassName('load__users')

console.log(btns)

const inputs = document.querySelectorAll('input')

console.log(inputs)

const form = document.querySelector('form')

console.log(form)

inputs.forEach(item => console.log(item))
