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

let color = 'green';

switch (color) {
    case 'red': 
        console.log('красный');
        break;
    case 'yellow': 
        console.log('джёлтий');
        break;
    case 'green': 
        console.log('зЭлЭнЫй');
        break;
    default:
        console.log('цвет не определён.');
}
