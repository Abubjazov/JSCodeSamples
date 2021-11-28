let num = 10

const pureSum = a => num += a

console.log(pureSum(5))
console.log(pureSum(5))
console.log(pureSum(5))

const notPureSum = a => a += Math.random()

console.log(notPureSum(5))
console.log(notPureSum(5))
console.log(notPureSum(5))
