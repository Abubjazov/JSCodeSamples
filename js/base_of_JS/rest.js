// const log = function(a, b, ...rest) {
//     console.log(a, b, rest)
// }

// log('basic', 'rest', 'operator', 'usage'

const person = {
    name: 'Alex',
    age: 28,
    null: null,
    phone: '+74443332211',
    info: {
        adress: 'some adress',
        email: 'email@email.xx'
    }
}

const personCP = person

const personJSON = JSON.stringify(person)
const personOBJ = JSON.parse(personJSON)

const personCopy = JSON.parse(JSON.stringify(person))

console.log(personJSON)
console.log(personOBJ)

console.log(person === personCopy)
console.log(person === personCP)

personCopy.info.adress = 'hhhh'
personCP.info.adress = 'wwwww'


console.log(person)
console.log(personCopy)
