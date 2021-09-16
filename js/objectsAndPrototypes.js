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
    

let ford = Object.create({
    calcDistPerYear: function() {
        Object.defineProperty(this, 'distancePerYear', {
            value: Math.ceil(this.distance / this.age),
            enumerable: false,
            writable: false,
            configurable: false
        });
    }
}, 
{
    name: {value: 'Ford', enumerable: true, writable: false, configurable: false},
    model: {value: 'Focus', enumerable: true, writable: false, configurable: false},
    year: {value: 2014, enumerable: true, writable: true, configurable: false},
    distance: {value: 120300, enumerable: true, writable: true, configurable: false},
    age: {enumerable: true,
        get: function() {
            return new Date().getFullYear() - this.year;
        },
        set: function(age) {
            this.year = new Date().getFullYear() - age;
        }   
    }
});

ford.calcDistPerYear();

for (let key in ford) {
    if (ford.hasOwnProperty(key)) {
        console.log(key, ford[key]);
    }
}
