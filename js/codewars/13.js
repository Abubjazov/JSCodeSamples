function rot13(message){    
    let messageArr = message.split('')

    return messageArr.map(symbol => {
        if (symbol.match(/[a-zA-Z]+/g)) {
            return cryptSymbol(symbol, 13)
        }
        
        return symbol
    }).join('')
}

function cryptSymbol(symbol, step, alphabet = 'abcdefghijklmnopqrstuvwxyz') {
    const alphabetUpper = alphabet.toUpperCase()   
    let index = alphabet.indexOf(symbol)
    
    if (index >= 0) {
        index += step
        index > alphabet.length - 1 ? index = index - alphabet.length : null

        return alphabet.substr(index, 1)
    }

    index = alphabetUpper.indexOf(symbol) + step
    index > alphabetUpper.length - 1 ? index = index - alphabetUpper.length : null  

    return alphabetUpper.substr(index, 1)        
}

console.log(rot13('10+2 is twelve'))
// ROT13 - это простой шифр подстановки букв, который заменяет букву буквой из 13 букв после нее в алфавите. ROT13 - это пример шифра Цезаря.

// Создайте функцию, которая принимает строку и возвращает строку, зашифрованную с помощью Rot13. 
// Если в строку включены числа или специальные символы, они должны быть возвращены как есть. 
// Следует сдвигать только буквы латинского / английского алфавита, как в оригинальной "реализации" Rot13.

