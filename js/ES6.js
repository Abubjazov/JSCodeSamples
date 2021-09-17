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

const person = {
    age: 25,
    firstname: 'Neo',
    logNameWithTimeout() {
        setTimeout(() => {
            console.log(this.firstname)
        }, 1000)
    }
}
