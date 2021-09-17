// function Car(name = 'car', year = 2000) {
//     this.name = name;
//     this.year = year;
// }

// Car.prototype.getAge = function() {
//     return new Date().getFullYear() - this.year;
// };

// let ford = new Car('Ford', 2015),
//     bmw = new Car('BMW', 2021),
//     car = new Car();

// console.log(ford.getAge());
// console.log(bmw.getAge());
// console.log(car);

// let ford = new Object(
//     {
//         name: 'Ford',
//         model: 'Mustang',
//         year: 2019,
//         distance: 12500
//     });
    
// Object.prototype.calcDistPerYear = function() {
//         return new Date().getFullYear() - this.year;
// };
    

// let ford = Object.create({
//     calcDistPerYear: function() {
//         Object.defineProperty(this, 'distancePerYear', {
//             value: Math.ceil(this.distance / this.age),
//             enumerable: false,
//             writable: false,
//             configurable: false
//         });
//     }
// }, 
// {
//     name: {value: 'Ford', enumerable: true, writable: false, configurable: false},
//     model: {value: 'Focus', enumerable: true, writable: false, configurable: false},
//     year: {value: 2014, enumerable: true, writable: true, configurable: false},
//     distance: {value: 120300, enumerable: true, writable: true, configurable: false},
//     age: {enumerable: true,
//         get: function() {
//             return new Date().getFullYear() - this.year;
//         },
//         set: function(age) {
//             this.year = new Date().getFullYear() - age;
//         }   
//     }
// });

// ford.calcDistPerYear();

// for (let key in ford) {
//     if (ford.hasOwnProperty(key)) {
//         console.log(key, ford[key]);
//     }


// let person = {
//     name: 'Max',
//     age: 35,
//     job: 'ProfessionalPinatelOfHuys'
// };

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(key, person[key]);
//     }
// }

// let keys = Object.keys(person).forEach((key) => {
//     console.log(person[key]);
// });

// function createCounter(counterName) {
//     let counter = 0

//     return {
//         increment: function() {
//             counter++
//         },
//         decrement: function() {
//             counter--
//         },
//         getCounter: function() {
//             return counter
//         }
//     }
// }

// let counterA = createCounter('Counter A')
// let counterB = createCounter('Counter B')

// let person = {
//     age: 28,
//     name: 'Alex',
//     job: 'FrontEnd',
//     displayInfo: function (ms) {
//         // let self = this
//         setTimeout(function() {
//             console.log(`Name: ${this.name}\njob: ${this.job}\nage: ${this.age}`)
//         }.bind(this), ms)
//     }
// }

function printObj(objName) {
    console.log(objName)
    for (let key in this) {
        if (this.hasOwnProperty(key)) {
            console.log(`[${key}] - ${this[key]}`)
        }
    }
}

let person = {
    firstName: 'Abu',
    job: 'BackEnd',
    age: 21,
    friends: ['Elena', 'Igor']
}

let car = {
    name: 'Ford',
    model: 'Focus',
    year: 2017
}

let printPerson = printObj.bind(person)

printPerson('PERSON')
printObj.call(person, 'PERSON')
printObj.apply(person, ['PERSON'])

let printCar = printObj.bind(car)

printCar('CAR')
printObj.call(car, 'CAR')
printObj.apply(car, ['CAR'])





































