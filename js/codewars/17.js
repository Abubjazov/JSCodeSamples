function decipherThis(text) {
    let strArr = text.split(' '),
        resArr = []

    strArr.map(symbol => {
        let ascSymb = parseInt(symbol),
            string = symbol.substring(ascSymb.toString().length),
            sArr = string.split('')
            
        const acc = sArr[0]
       
        sArr[0] = sArr[sArr.length - 1]
        sArr[sArr.length - 1] = acc
        ascSymb = String.fromCharCode(ascSymb)
        sArr.unshift(ascSymb)
        resArr.push(sArr.join(''))
    })

    return resArr.join(' ')
};

console.log(decipherThis('72olle 103doo 100ya')); // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')); // 'Ready set go'
