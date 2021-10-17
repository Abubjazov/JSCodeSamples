'use strict'

// function showThis() { //Обычная функция: this = window, в strict mode this = undefined
//     console.log(this)
// }

// showThis()

// function showThis2(a, b) {
//     console.log(this)
//     function sum() {
//         console.log(this)
//         return a + b
//     }

//     console.log(sum())
// }

// showThis2(1, 2)

// const obj = { //Контекст this у методов объекта = самому объекту
//     a: 20,
//     b: 30,
//     sum: function() {
//         console.log(this)
//         function shout() {
//             console.log(this) //Контекст потерян
//         }

//         shout()
//     }
// }

// obj.sum()

// function User(name, age) { // this в конструкторах и классах это новый экземпляр объекта
//     this.name = name
//     this.age = age
//     this.human = true
//     this.hello = () => {
//         console.log(`Hello from ${this.name}`)
//     }
// }

// const ivan = new User('Ivan', 35)
// function sayName(surname = '-') {
//     console.log(this)
//     console.log(this.name, surname)
// }

// const user = {
//     name: 'John'
// }

// sayName.call(user, 'Ivanov')
// sayName.apply(user, ['Smith'])

// function count(num) {
//     return this * num
// }

// const double = count.bind(2)

// console.log(double(3))
// console.log(double(13))

const btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    console.log(this)
    this.style.backgroundColor = 'green'
})

btn.addEventListener('click', (e) => {
    console.log(e.target)
})

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => console.log(this)

        say()
    }
}

obj.sayNumber()
