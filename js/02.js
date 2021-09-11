// let res1 = 12 - 6 / 3;
// let res2 = (12 - 6) / 3;

// let isGreate = 10 - 6 * 2 < (10 - 6) * 2;

// console.log(res1);
// console.log(res2);
// console.log(isGreate);

// 0, null, undefined, '', NaN : приводятся к false (x / 0 = NaN)

// 1, 'x' : приводятся к true
// let x;

// if (x) {
//     console.log('TRUE');
// }else {
//     console.log('FALSE');
// }

// //аналог при помощи тернарного оператора:

// x ? console.log('TRUE') : console.log('FALSE');

// let age = 17;
// let message =  age < 18 
//     ? 'NOT OK!' 
//     : 'OK!';

// console.log(message);

// let color = 'green';

// switch (color) {
//     case 'red': 
//         console.log('красный');
//         break;
//     case 'yellow': 
//         console.log('джёлтий');
//         break;
//     case 'green': 
//         console.log('зЭлЭнЫй');
//         break;
//     default:
//         console.log('цвет не определён.');
// }

// let year = 1985,
//     currentYear = 2021,
//     comparison = 35,
//     compObj = 'Человек';

// function calculateAge(year, currentYear) {
//   let result = currentYear - year;
//   return result;
// }

// function checkAngLogAge(year, currentYear = 2021, comparison = 10, compObj = 'Автомобиль') {
//   if (calculateAge(year, currentYear) < comparison) {
//     console.log(`Объект: ${compObj}. Возраст меньше ${comparison} лет.`);
//   } else {
//     console.log(`Объект: ${compObj}. Возраст больше ${comparison} лет.`);
//   }
// }

// checkAngLogAge(year, currentYear, comparison, compObj);

// string: .length, .toUpperCase, .toLowerCase, .charAt(position = 1), .indexOf('string'), .substr(pos=1, simbols=4), substring(pos=1, posEnd-1)

// const stringgg = 'Catdog cat catdog';
// console.log(stringgg.indexOf('dog'));
// console.log(8 / 0);

// number: .toString(), toFixed(simbols=3) - округляет в большую сторону и возвращает строку, +string - возвращает число, isNaN, isFinite - конечное число или нет


// console.log(parseInt('3.5px'));
// console.log(parseFloat(('px2.2px3.5').slice(3)));

// let r = ['13Абубязов', '3Радик', '220Римович'];

// r.forEach((elem) => {
//     r.shift();
//     r.push(parseString(elem));
// });

// console.log(r);
// Array: unshift+s, push+e, pop->e, shift->s, indexOf('string')

var obj = {
    id: 0,
    name: 'Vasya',
    year: 1990,
    family: ['Elena', 'Igor'],
    car: {
        model: 'Ford',
        year: 2001
    },
    calcAge: function() {
        this.age = 2021 - this.year;
    }
};

obj.calcAge();
console.log(obj.age);
console.log(obj.family[1]);
console.log(obj.family[0]);
obj['family'][0] = 'Anna';
console.log(obj.family[0]);

