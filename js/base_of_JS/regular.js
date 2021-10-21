new RegExp('pattern', 'flags')
/pattern/flags

const string = `NNNNDDSGAfdeayfasjfsghcvcbdmvndvdsjkvbndscxvbnxzbvnbxnvbzxnbnbnnnnnn`

const reg = /n/gi //flags i - игнорировать регистр, g - найти все вхождения, m - многострочный режим . \d - числа \w - слова \s - пробелы, \D - НЕ числа

console.log(string.search(reg)) // -1 или первое найденное, g неработает

console.log(string.match(reg))

const pass = prompt('Password')

console.log(pass.replace(/./g, '*'))

console.log('12-34-56'.replace(/-/g, ':'))

console.log(string.match(/\d/gi).join(''))

const str = 'My name is R2D2'

console.log(str.match(/\w\d\w\d/i))
console.log(str.match(/\D\S/ig))
