function encryptThis(text) {
    let strArr = text.split(' '),
        resArr = []

    strArr.map(symbol => {
        let sArr = symbol.split('')
        const acc = sArr[1]

        sArr[0] = (sArr[0].charCodeAt(0))        
        sArr[1] = sArr[sArr.length - 1]
        sArr[sArr.length - 1] = acc

        resArr.push(sArr.join(''))
    })

    return resArr.join(' ')
};



console.log(encryptThis("Hello")) //=== "72olle"
console.log(encryptThis("good")) //=== "103doo"
console.log(encryptThis("hello world")) //=== "104olle 119drlo"
