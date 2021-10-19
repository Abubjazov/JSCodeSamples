const num1 = 13,
      num2 = 7;

console.log('+', num1 + num2);
console.log('-', num1 - num2);
console.log('*', num1 * num2);
console.log('/', num1 / num2);

const str1 = 'Hello',
      str2 = 'World';

console.log('+', str1 + ' ' + str2);
console.log('1 + "2":', 1 + '2');
console.log('Bool + String:', true + str1);

console.log('Bool: true + 1:', true + 1);
console.log('Bool: false + 1:', false + 1);

console.log('+Bool: true:', +true);
console.log('+Bool: false:', +false);

function check(str) {
    const strArr = [...str],
          symb = ['(', ')', '[', ']', '{', '}']
    
    const res = symb.map((item) => {
        let i = 0

        strArr.forEach(elem => {
            if (item === elem) {
                i++
            } 
        })

        return i
    })

    return `${symb[0]} - ${symb[1]} : ${res[0] === res[1]}, ${symb[2]} - ${symb[3]} : ${res[2] === res[3]}, ${symb[4]} - ${symb[5]} : ${res[4] === res[5]}`
}

console.log(check('((((([)))){{{{}}}}[[{}]]{'))

const arr = [4, 4, 1, 1, 2, 3, 4, 4, 5, 6, 6, 7, 7, 8, 9, 9, 9, 8, 9]

function withoutRepeat(array) {
    array.sort()
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            array.splice(i, 2)
            return withoutRepeat(array)
        } 
    }

    console.log(array)
}

withoutRepeat(arr)
