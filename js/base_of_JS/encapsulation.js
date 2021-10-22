// function User(name, age) {
//     this.name = name
//     let userAge = age
    
//     this.say = function() {
//         console.log(`User name: ${this.name}, user age: ${userAge}`)
//     }

//     this.getAge = function() {
//         return userAge
//     }

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0) {
//             userAge = age
//         } else {
//             console.log(`Невалидный аргумент функции: ${age}`)
//         }
        
//     }
// }

// const petr = new User('Petr', 27)

// petr.say()

// petr.name = 'Alex'
// petr.userAge = 31

// petr.say()

// console.log(petr.getAge())
// petr.setAge(0)
// petr.setAge('a')
// petr.setAge(31)

// petr.say()

class User {
    constructor(name, age) {
        this.name = name
        this._age = age
    }    
    
    say() {
        console.log(`User name: ${this.name}, user age: ${this._age}`)
    }

    get age() {
        return this._age
    }

    set age(age) {
        if (typeof age === 'number' && age > 0) {
            this._age = age
        } else {
            console.log(`Невалидный аргумент функции: ${age}`)
        }
        
    }
}

const petr = new User('Petr', 27)

console.log(petr.age)
petr.age = 31
petr.say()


class User2 {
    constructor(name, age) {
        this.name = name
        this._age = age
    }
    
    #surname = 'Bobrikov'
    
    say = () => {
        console.log(`User name: ${this.name} ${this.#surname}, user age: ${this._age}`)
    }

    get age() {
        return this._age
    }

    set age(age) {
        if (typeof age === 'number' && age > 0) {
            this._age = age
        } else {
            console.log(`Невалидный аргумент функции: ${age}`)
        }
        
    }

    get surname() {
        return this.#surname
    }

    set surname(age) {
        if (typeof age === 'number' && age > 0) {
            this.#surname = age
        } else {
            console.log(`Невалидный аргумент функции: ${age}`)
        }
        
    }
}

const petr2 = new User2('Petr', 27)
console.log(petr2.surname)
petr2.say()
