const MORSE_CODE = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
    '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...':
        '7', '---..': '8', '----.': '9', '-----': '0', '--..--': ', ', '.-.-.-': '.', '..--..': '?', '-..-.': '/', '-....-': '-', '-.--.': '(', '-.--.-': ')', '-.-.-- ': '!'
}

// // const MORSE_CODE = {
// //     '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
// //     '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
// //     '-.--': 'y', '--..': 'z', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...':
// //     '7', '---..': '8', '----.': '9', '-----': '0', '--..--': ', ', '.-.-.-': '.', '..--..': '?', '-..-.': '/', '-....-': '-', '-.--.': '(', '-.--.-': ')', '−−..−− ': '!'}

const decodeMorse = (morseCode) => {
    const morseWords = morseCode.split('   ')
    let resText = ''

    morseWords.forEach(word => {
        const morseSymbols = word.split(' ')

        morseSymbols.forEach(symbol => {
            resText += typeof (MORSE_CODE[symbol]) !== 'undefined' ? MORSE_CODE[symbol] : ''
        })

        resText += ' '
    })

    return resText.trim()
}

const decodeBits = (bits) => {
    for (let i = 0; i < bits.length; i++) {
        if (bits.charAt(i) === '1') {
            bits = bits.slice(i)
            break
        }
    }

    for (let i = 0; i < bits.length; i++) {
        if (bits.charAt(bits.length - i) === '1') {
            bits = bits.slice(0, bits.length - i + 1)
            break
        }
    }

    let segmentSize = bits.split('0').filter(item => item !== '').sort()[0].length
    let i = 0, normalizedBits = '', zeroCollizion = 0

    while (i < bits.length) {
        let segment = bits.slice(i, i + segmentSize)

        if (segment.split('').every(element => element === segment[0])) {
            segment[0] === '1' ? normalizedBits += '1' : normalizedBits += '0'
            i += segmentSize
        } else {
            zeroCollizion++
            i++
        }
    }

    if (zeroCollizion) {
        segmentSize = zeroCollizion, i = 0, normalizedBits = ''

        while (i < bits.length) {
            let segment = bits.slice(i, i + segmentSize)

            segment[0] === '1' ? normalizedBits += '1' : normalizedBits += '0'
            i += segmentSize
        }
    }

    let resMorseCode = '',
        words = normalizedBits.split('0000000')

    words.forEach(word => {
        let symbols = word.split('000')

        symbols.forEach(symbol => {
            let morseSymbols = symbol.split('0')

            morseSymbols.forEach(mSymbol => {
                mSymbol === '1' ? resMorseCode += '.' : null
                mSymbol === '111' ? resMorseCode += '-' : null
            })

            resMorseCode += ' '
        })

        resMorseCode += '   '
    })

    return resMorseCode.trim()
}

// const bits = '00011100010101010001000000011101110101110001010111000101000111010111010001110101110000000111010101000101110100011101110111000101110111000111010000000101011101000111011101110001110101011100000001011101110111000101011100011101110001011101110100010101000000011101110111000101010111000100010111010000000111000101010100010000000101110101000101110001110111010100011101011101110000000111010100011101110111000111011101000101110101110101110'

// const bits = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'
// const bits = '0000000011011010011100000110000001111110100111110011111100000000000111011111111011111011111000000101100011111100000111110011101100000100000'

console.log(decodeMorse(decodeBits(bits)))



// const bits = '110110100111000001100000011111101001111100111111000000000001110111111110111110111110000001011000111111000001111100111011000001'

// const bits = '111111100000011010001110111000000001110000000000000000001111111011111100001101111100000111100111100011111100000001011100000011111110010001111100110000011111100101111100000000000000111111100001111010110000011000111110010000011111110001111110011111110000010001111110001111111100000001111111101110000000000000010110000111111110111100000111110111110011111110000000011111001011011111000000000000111011111011111011111000000010001001111100000111110111111110000001110011111100011111010000001100001001000000000000000000111111110011111011111100000010001001000011111000000100000000101111101000000000000011111100000011110100001001100000000001110000000000000001101111101111000100000100001111111110000000001111110011111100011101100000111111000011011111000111111000000000000000001111110000100110000011111101111111011111111100000001111110001111100001'

// const bits = '11111000001111111000011111100000111111111111111000011111111111111000000111111111111111100001110000011111100000001111000000000000000011111111111111000000111110000011111111111111100000011110000011111111111111100001111111111111110000000000000000000000000000000000011111111111111110000000000000001111000000111110000011110000000111100000000000000111110000000000000000000000000000000000011111111111111100000111111111111111000011111000001111111111111100000000000000001111111000000111111000000011111111111111000000000000000011110000001111100000000000000011111111111111100000111111000111111111111111000011110000000000000000111111111111110000000111100000111111111111110000000000000000000000000000000000011111111111111100000111111000011111000000111110000000000000001111110000111111111111111100000011110000000000000011111111111111100001111111111111110000111111111111110000000000000001111100000001111111111111110000000111111111111111110000000000000000111111111111111000001111100000000000000000000000000000000000011110001111100000011111111111111110000011100000000000000011111111111111110000011111111111110000001111111111111111000000000000001111111111111110000001111100001111110000001111111111111111000000000000000000000000000000000011110000011111111111111100000011111111111111100001111111111111111000000000000001111110001111000011111111111100000000000000001111111111111100000011111111111111100000000000000110000011111111111111100000111111111111111100000111110000000000000001111110000111110000111111000000000000000000000000000000000011111111111111110001111111111111111000001111111111111111000000000000000111100000111110000111100000111111111111111000000000000000111111000000000000000111000000111111111111111000111100000000000000000000000000000000000011111111111111100000000000000011111110000111100000111111000001111110000000000000001111110000000000000000000000000000000000000111111000111111111111111100000111100000011111110000000000000011110000111111111111111000000000000011111111111111000001111111111111111000001111100001111100000000000000011111111111111000001111110000011111111111111111000011111111111111100000000000000000000000000000000000001111111111111111000001111110000011110000000000000111111111111111000001111111111111111000011111111111111110000000000000001111111111111100000011111111111111100000111100000000000000011111100000111111111111110000001110000011111111111111110000011111000011111111111111'

// const bits = '00000000000000011111111000000011111111111100000000000111111111000001111111110100000000111111111111011000011111111011111111111000000000000000000011111111110000110001111111111111000111000000000001111111111110000111111111100001100111111111110000000000111111111111011100001110000000000000000001111111111010111111110110000000000000001111111111100001111111111110000100001111111111111100000000000111111111000000011000000111000000000000000000000000000011110001111100000111100000000111111111100111111111100111111111111100000000011110011111011111110000000000000000000000111111111110000000011111000000011111000000001111111111110000000001111100011111111000000000111111111110000011000000000111110000000111000000000011111111111111000111001111111111001111110000000000000000000001111000111111111100001111111111111100100000000001111111100111111110111111110000000011101111111000111000000001001111111000000001111111111000000000111100001111111000000000000011111111100111111110111111111100000000000111111110000001100000000000000000000111111101010000010000001111111100000000011111000111111111000000111111111110011111111001111111110000000011000111111110000111011111111111100001111100001111111100000000000011110011101110001000111111110000000001111000011111110010110001111111111000000000000000000111111111110000000100000000000000000011110111110000001000011101110000000000011111111100000011111111111100111111111111000111111111000001111111100000000000001110111111111111000000110011111111111101110001111111111100000000111100000111100000111111111100000111111111111000000011111111000000000001000000111100000001000001111100111111111110000000000000000000010001111111100000011111111100000000000000100001111111111110111001111111111100000111111100001111111111000000000000000000000000011100000111111111111011110000000010000000011111111100011111111111100001110000111111111111100000000000000111110000011111001111111100000000000011100011100000000000011111000001111111111101000000001110000000000000000000000000000111110010000000000111111111000011111111110000000000111111111111101111111111100000000010000000000000011111111100100001100000000000000111100111100000000001100000001111111111110000000011111111111000000000111100000000000000000000111101111111111111000000000001111000011111000011110000000001100111111100111000000000100111000000000000111110000010000011111000000000000001111111111100000000110111111111100000000000000111111111111100000111000000000111111110001111000000111111110111111000000001111000000000010000111111111000011110001111111110111110000111111111111000000000000000000000000111111111110000000111011111111100011111110000000001111111110000011111111100111111110000000001111111111100111111111110000000000110000000000000000001000011111111110000000001111111110000000000000000000000011111111111111000000111111111000001111111110000000000111111110000010000000011111111000011111001111111100000001110000000011110000000001011111111000011111011111111110011011111111111000000000000000000100011111111111101111111100000000000000001100000000000000000011110010111110000000011111111100000000001111100011111111111101100000000111110000011110000111111111111000000001111111111100001110111111111110111000000000011111111101111100011111111110000000000000000000000000010000111111111100000000001111111110111110000000000000000000000110000011110000000000001111111111100110001111111100000011100000000000111110000000011111111110000011111000001111000110000000011100000000000000111100001111111111100000111000000001111111111000000111111111100110000000001111000001111111100011100001111111110000010011111111110000000000000000000111100000011111000001111000000000111111001110000000011111111000100000000000011111111000011001111111100000000000110111000000000000111111111111000100000000111111111110000001111111111011100000000000000000000000000'

const decodeBits2 = (bits) => {
    for (let i = 0; i < bits.length; i++) {
        if (bits.charAt(i) === '1') {
            bits = bits.slice(i)
            break
        }
    }

    for (let i = 0; i < bits.length; i++) {
        if (bits.charAt(bits.length - i) === '1') {
            bits = bits.slice(0, bits.length - i + 1)
            break
        }
    }

    const bitsArr = [...bits]
    let counter = 0, avgBoundary = [], res = []

    bitsArr.forEach((elem, index) => {
        if (elem === '1') {
            counter++

            if (bitsArr[index + 1] === '0' || index + 1 === bitsArr.length) {
                res.push(counter)
                counter = 0
            }
        }
    })

    avgBoundary.push(res.sort(function (a, b) { return a - b })[res.length - 1] > 0 ? res.sort(function (a, b) { return a - b })[res.length - 1] : 0)
    res = []

    bitsArr.forEach((elem, index) => {
        if (elem === '0') {
            counter++

            if (bitsArr[index + 1] === '1' || index + 1 === bitsArr.length) {
                res.push(counter)
                counter = 0
            }
        } else {
            res.push(0)
        }
    })

    avgBoundary.push(res.sort(function (a, b) { return a - b })[res.length - 1] > 0 ? res.sort(function (a, b) { return a - b })[res.length - 1] : 0)

    res = []

    const boundaryA = Math.floor(avgBoundary[0] / 2),
        boundaryB = Math.floor(avgBoundary[1] / 2) + 1

    bitsArr.forEach((elem, index) => {
        if (elem === '1') {
            counter++

            if (bitsArr[index + 1] === '0' || index + 1 === bitsArr.length) {
                res.push(counter > boundaryA && counter > 1 && avgBoundary[1] !== 0 && avgBoundary[0] !== avgBoundary[1] ? '-' : '.')
                counter = 0
            }

        }

        if (elem === '0') {
            counter++

            if (bitsArr[index + 1] === '1' || index + 1 === bitsArr.length) {
                if (counter > boundaryB + 1 && boundaryA !== boundaryB - 1) {
                    res.push('   ')
                }

                if (counter > boundaryA && counter <= boundaryB + 1 && boundaryA !== boundaryB - 1) {
                    res.push(' ')
                }

                counter = 0
            }
        }
    })

    return res.join('')
}

console.log(decodeMorse(decodeBits2(bits)))