// function first() {
//     setTimeout(function() {
//         console.log(1)
//     }, 500)
// }

// function second() {
//         console.log(2)
// }

// first()
// second()

// function learnJS(lang, callback1, callback2) {
//     console.log(`I learn ${lang}`)
//     callback1()
//     callback2()
// }    

// learnJS('JS', first, second)


const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function() {
        console.log(Object.keys(this).length)
    }
}

// console.log(options)

// delete options.name

// console.log(options)

let counter = 0

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let keyi in options[key]) {
            console.log(key, keyi, options[key][keyi])   
        }
    } else {
        console.log(key, options[key])
    }
    counter++
}

console.log(counter)

console.log(Object.keys(options).length)
console.log(Object.keys(options))
console.log(Object.keys(options).join(' '))

options.makeTest()

const {border, background} = options.colors

console.log(border, background)
