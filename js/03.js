// document.querySelector('#alert').addEventListener('click', () => {
//     alert('WOW');
// });

// document.querySelector('#confirm').addEventListener('click', () => {
//     let dec = confirm('WOW WOW');

//     console.log(dec);
// });

// document.querySelector('#prompt').addEventListener('click', () => {
//     let dec = prompt('WOW WOW', 18);

//     console.log(dec);
// });

// console.log('Сообщение');
// console.info('Информация');
// console.warn('Предупреждение');
// console.error('Ошибка');

// throw new Error('Error');

let str = '1, 2, 3, 4, 5, 6, 7, 8, 9';
let array = str.split(', ');

// console.log(array.join('; '));
// console.log(array.reverse());

// array.splice(1, 2);
// array.splice(1, 0, '33', '44');
// let newArr = array.concat([1, 2]);
// console.log(newArr);

// let objArr = [
//     {name: 'Max', age: 27},
//     {name: 'Alina', age: 25},
//     {name: 'Sasha', age: 28}
// ];

// console.log(objArr);

// let foundPerson = objArr.find(function (person) {
//     return person.age === 25;
// });

// console.log(foundPerson.name);
console.log('1, 2, 3, 4, 5, 6, 7, 8, 9'.split(', ').filter((i) => {return i % 2 !== 0;}));
console.log('1, 2, 3, 4, 5, 6, 7, 8, 9'.split(', ').filter((i) => {return i % 2 !== 0;}).map((i) => {return parseInt(i);}));
console.log('1, 2, 3, 4, 5, 6, 7, 8, 9'.split(', ').filter((i) => {return i % 2 !== 0;}).map((i) => {return i * 1;}));
