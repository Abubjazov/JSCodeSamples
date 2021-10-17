// ES 5 syntax

function User(name, age) {
    this.name = name
    this.age = age
    this.human = true
    this.hello = () => {
        console.log(`Hello from ${this.name}`)
    }
}

const ivan = new User('Ivan', 35)

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} вышел`)
}

const mike = new User('Mike', 31)

ivan.hello()
mike.hello()

ivan.exit()
mike.exit()

// ES 6+ syntax

class User2 {
    constructor(name, age) {
        this.name = name
        this.age = age
        this.human = true
    }
    hello() {
        console.log(`Hello from ${this.name}2`)
    }
}

User2.prototype.exit = function() {
    console.log(`Пользователь ${this.name}2 вышел`)
}

const ivan2 = new User2('Ivan', 35)
ivan2.hello()
ivan2.exit()
