// let a = 5,
//     b = a

// b = b + 5

// console.log(a, b)

const obj = {
    a: 5,
    b: 1,
    c: {
        d: 0,
        e: 3
    },
    f: {
        g: 0,
        h: {
            i: 44,
            j: 88
        }
    }
}

const obj2 = {
    s: 's',
    l: 'l'
}

console.log(Object.assign(obj, obj2))

const clone = Object.assign({}, obj)

console.log(clone)
// const copy = obj

// copy.a = 10

// console.log(copy, obj)

// function copy(obj) {  //поверхностная копия объекта
//     let objCopy = {}

//     for (let key in obj) {
//         objCopy[key] = obj[key]
//     }

//     return objCopy
// }

// const numbers = copy(obj)

// console.log(obj)
// console.log(numbers)

// numbers.a = 555
// numbers.c.y = 333

// console.log(obj)
// console.log(numbers)

const oldArray = ['a', 'b', 'c', ['q', 'd']],
      newArray = oldArray.slice()

newArray[2] = 'VVV'
newArray[3][0] = 'VVV'

console.log(oldArray)
console.log(newArray)
