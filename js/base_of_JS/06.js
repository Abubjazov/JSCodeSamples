const arr = [1, 2, 3, 4, 5]
console.log(arr)

// arr.pop()
// console.log(arr)

// arr.push(7)
// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.unshift(5)
// console.log(arr)

// console.log(arr.length)

// arr[99] = 0
// console.log(arr.length)
// console.log(arr)

arr.forEach((item, i, arr) => {
    console.log(`${i} ${item} in array: ${arr}`)
} 
)

let str = "сок вода соль сахар мука"
console.log(str.split(' '))
str = str.split(' ')
console.log(str)
console.log(str.join(' '))
console.log(str.sort())
