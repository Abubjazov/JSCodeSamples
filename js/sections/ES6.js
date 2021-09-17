// for (var i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 2000)
// }

// for (let i = 0; i < 5; i++) {
//     setTimeout(function() {
//         console.log(i)
//     }, 2000)
// }

// function getAge(year) {
//     const currentYear = new Date().getFullYear()

//     return currentYear - year
// }

// const calcAge = (year) => {
//     const currentYear = new Date().getFullYear()

//     return currentYear - year
// }

// const calcAge = year => {
//     const currentYear = new Date().getFullYear()

//     return currentYear - year
// }

// const calcAge = year => {
//     return new Date().getFullYear() - year
// }

// const calcAge = year => new Date().getFullYear() - year

// console.log(getAge(1985))
// console.log(calcAge(1992))

// const calcAge = year => console.log(new Date().getFullYear() - year)

// calcAge(1887)


// const person = {
//     age: 25,
//     firstname: 'Neo',
//     logNameWithTimeout: function() {
//         setTimeout(function() {
//             console.log(this.firstname)
//         }.bind(this), 1000)
//     }
// }

// const person = {
//     age: 25,
//     firstname: 'Neo',
//     logNameWithTimeout: function() {
//         setTimeout(() => {
//             console.log(this.firstname)
//         }, 1000)
//     }
// }

// const person = {
//     age: 25,
//     firstname: 'Neo',
//     logNameWithTimeout() {
//         setTimeout(() => {
//             console.log(this.firstname)
//         }, 1000)
//     }

// const createPost = (title, text, date) => {
//     return {
//         title: title,

//         text: text,
//         date: date || new Date().toLocaleDateString()
//     }
// }

// const createPost = (title, text, date = new Date().toLocaleDateString()) => {
//     return {
//         title, 
//         text, 
//         date
//     }
// }


// const post = createPost('Скоро новый год', 'Скоро будет 2022!')
// console.log(post)

// const createCar = (name, model) => ({name, model})
// const car = createCar('Dodge', 'Viper')

// console.log(car)

// const yearField = 'year'

// const bmw = {
//     name: 'BMW',
//     ['model']: 'X6 Sport',
//     [yearField]: 2018,

//     logFields() {
//         const {name, year, model} = this
//         console.log(name, model, year)
//     }
// }

// bmw.logFields()

// const year = bmw.year
// const {year} = bmw

// console.log(year)

const form = document.querySelector('form')

form.addEventListener('submit', e => {
    e.preventDefault()
    // saveForm({title, text, desc}) //Spread
    saveForm(form.title.value, form.text.value, form.desc.value) //Rest
})

//Spread
// function saveForm(data) {
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         ...data    
//     }

//     console.log(formData)
// }

//Rest
function saveForm(...args) {
    const[ title, text, desc] =  args
    
    const formData = {
        date: new Date().toLocaleDateString(),
        title, text, desc
    }

    console.log(formData)
}
