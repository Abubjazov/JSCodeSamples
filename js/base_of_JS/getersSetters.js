const person = {
    name: 'Alex',
    age: 25,

    get userAge() {
        return this.age
    },
    set userAge(age) {
        this.age = age
    }
}

console.log(person.userAge)
console.log(person.userAge = 34)
console.log(person.userAge)
