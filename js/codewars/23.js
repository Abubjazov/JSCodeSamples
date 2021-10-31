const digiBox  = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
    ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19,
    twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90, hundred: 100,
    thousand: 1000, million: 1000000
}

function parseSep(word) {
    let words = word.split('-')
    return digiBox[words[0]] + digiBox[words[1]]
}

function parseInt(string) {
    let resultArr = [],
        result = 0

    string = string.split(' ').filter(item => item !== 'and')

    string.forEach(word => word.split('').filter(item => item === '-')[0] === '-' ? resultArr.push(+parseSep(word)) : resultArr.push(digiBox[word]))

    console.log(string)
    console.log(resultArr)

    if (resultArr.indexOf(1000000) != '-1') {
        let a = resultArr.shift(),
            b = resultArr.shift()

        result += a * b

        console.log(resultArr)
        console.log(result)
    }

    if (resultArr.indexOf(1000) != '-1') {
        const tmp = resultArr.slice(0, resultArr.indexOf(1000))
        let resTmp = 0
        console.log(tmp)

        if (tmp.indexOf(100) != '-1') {
            let a = tmp.shift(),
                b = tmp.shift()
        
        tmp.push(a * b)
        }
        console.log(tmp)
        tmp.forEach(item => resTmp += item)
        console.log(result += resTmp * 1000)
        
        let counter = resultArr.indexOf(1000) + 1
        console.log(counter)
        while (counter > 0) {
            resultArr.shift()
            counter--
        }
        console.log(resultArr)
        console.log(result)
    }

    if (resultArr.indexOf(100) != '-1') {
        let a = resultArr.shift(),
            b = resultArr.shift()

        result += a * b

        console.log(resultArr)
        console.log(result)
    }

    resultArr.forEach(item => result += item)

    console.log(result)

    return result    
}

parseInt('one million')

// parseInt('nine hundred forty-three thousand six hundred twenty-nine') //6666666 -> six * million + (ssix * hundred + sixty-six) * thousand + six * hundred + sixty-six
// console.log(parseInt('six hundred forty-three thousand nine hundred and twenty-nine')) //643929
