// const now = new Date()
// const now = new Date('2021-06-01')
// const now = new Date(2021, 5, 1, 13)
// const now = new Date(0)
// const now = new Date(-999999999999)
const now = new Date()

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getUTCDay())
// console.log(now.getHours())
// console.log(now.getUTCHours())
// console.log(now.getTimezoneOffset())
// console.log(Date(now.getTime()))
// console.log(now)
// console.log(now.setHours(18, 40))
// console.log(now.setHours(40))
// console.log(now)

let start = new Date()

for (let i = 0; i < 100000000; i++) {
    let some = i ** 3
}

let end = new Date()

console.log(end - start)
