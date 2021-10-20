// let a = [1, 2, 3]
// let b = [5, 'Hello', 6]

// Array.prototype.double = function() {
//     return this.map(function(item) {
//         if (typeof item === 'number') {
//             return Math.pow(item, 2)
//         } else if (typeof item === 'string') {
//             return item += item
//         } else {
//             return 'INVALID VALUE'
//         }        
//     })
// }

// let newA = a.double()
// let newB = b.double()

// console.log(newA.double())
// console.log(newB.double())

// const names = ['Harry', 'RonDonDon', 'Hermy', 'Voldemort'],
//       numbers = [1, 5, 6, 4, 3, 7, 9, 0, 1, 2, 1, 6, 7, 4]

// let filterNames = names.filter(item => {
//     if (item.length > 5) {
//         return item
//     }
// })

// let filterNames = names.filter(item => {
//         return item.length > 5
// })

// let filterNames = names.map(item => item.toLowerCase())

// console.log((names.map(item => item.toLowerCase())).join(' '))

// console.log(names.some(item => typeof(item) === 'number'))
// console.log(names.every(item => typeof(item) === 'string'))

// console.log(numbers.reduce((sum, current) => sum + current, 50))

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
}

console.log(Object.entries(obj))
console.log(Object.entries(obj).filter(item => item[1] === 'animal').map(item => item[0]).join(' ').toUpperCase())
