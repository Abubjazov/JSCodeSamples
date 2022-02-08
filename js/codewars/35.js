
const strReducer = (accumulator, currentValue) => accumulator + currentValue.charCodeAt(0)
const transformString = (string) => string.split('').reduce(strReducer, 0)
const compareStrings = (str1, str2) => transformString(str1) === transformString(str2)

const str1 = "dog", str2 = "dgo"
const str11 = "dog", str22 = "dfo"
const str111 = "doog", str222 = "odog"

console.log(compareStrings(str1, str2))
console.log(compareStrings(str11, str22))
console.log(compareStrings(str111, str222))
