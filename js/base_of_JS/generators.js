function* generator() {
    yield 'A'
    yield 'B'
    yield 'C'
    yield 'D'
    yield 'E'
}

const simbol = generator()

console.log(simbol.next().value)
console.log(simbol.next().value)
console.log(simbol.next().value)
console.log(simbol.next().value)
console.log(simbol.next().value)
console.log(simbol.next().done)

function* counter(n) {
    for (let i = 1; i < n + 1; i++) {
        yield i
    }
}

const counter1 = counter(13)

console.log(counter1.next().value)
console.log(counter1.next().value)
console.log(counter1.next().value)
console.log(counter1.next().value)
console.log(counter1.next().value)
console.log(counter1.next().value)
console.log(counter1.next().value)
console.log(counter1.next().value)
console.log(counter1.next().value)
console.log(counter1.next().value)
console.log(counter1.next().value)
console.log(counter1.next().value)
console.log(counter1.next().value)
console.log(counter1.next().done)

for (let i of counter1 ) {
    console.log(i)
}

for (let i of counter(3) ) {
    console.log(i)
}
