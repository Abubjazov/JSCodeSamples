// let str = 'some',
//     strObj= new String(str)

// console.log(typeof(str))
// console.log(typeof(strObj))

console.dir([1, 2, 3])

const giJoe = {
    health: 100,
    armor: 200,
    sayHello: () => console.log('Hello')
}

const john = Object.create(giJoe)

// const john = {
//     armor: 400
// }

// john.__proto__ = giJoe // устарело
// Object.setPrototypeOf(john, giJoe) // как надо теперь

console.log(john.health)
john.sayHello()

