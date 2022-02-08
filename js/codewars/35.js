
const reducer = (accumulator, currentValue) => accumulator + currentValue.charCodeAt(0)
const compareStrings = (str1, str2) => str1.split('').reduce(reducer, 0) === str2.split('').reduce(reducer, 0)

const str1 = "dog", str2 = "dgo"
const str11 = "dog", str22 = "dfo"
const str111 = "doog", str222 = "odog"

console.log(compareStrings(str1, str2))
console.log(compareStrings(str11, str22))
console.log(compareStrings(str111, str222))
