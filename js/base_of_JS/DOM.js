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

form.style.outline = '1px solid black'

btns[1].style.borderRadius = '100%'
btns[1].textContent = 'RUN'

btns[2].style.cssText = 'background-color: red; width: 500px;'

for (let i = 0; i < btns.length; i++) {
    btns[i].style.borderRadius = '100%'
}

inputs.forEach(item => {
    item.style.backgroundColor = 'green'
})

const div = document.createElement('div')
const text = document.createTextNode('lorem ip sum')

div.classList.add('added-class')

// document.querySelector('form').append(div)
// document.querySelector('form').prepend(text)

btns[2].before(div)
btns[2].after(text)
btns[2].remove()

btns[0].replaceWith(inputs[1])
