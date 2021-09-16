function Car(name = 'car', year = 2000) {
    this.name = name;
    this.year = year;
}

Car.prototype.getAge = function() {
    return new Date().getFullYear() - this.year;
};

let ford = new Car('Ford', 2015),
    bmw = new Car('BMW', 2021),
    car = new Car();

console.log(ford.getAge());
console.log(bmw.getAge());
console.log(car);
