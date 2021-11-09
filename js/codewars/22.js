const MORSE_CODE = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
    '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...':
        '7', '---..': '8', '----.': '9', '-----': '0', '--..--': ', ', '.-.-.-': '.', '..--..': '?', '-..-.': '/', '-....-': '-', '-.--.': '(', '-.--.-': ')'
}

// const MORSE_CODE = {
//     '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
//     '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
//     '-.--': 'y', '--..': 'z', '.----': '1', '..---': '2', '...--': '3', '....-': '4', '.....': '5', '-....': '6', '--...':
//     '7', '---..': '8', '----.': '9', '-----': '0', '--..--': ', ', '.-.-.-': '.', '..--..': '?', '-..-.': '/', '-....-': '-', '-.--.': '(', '-.--.-': ')'}

const decodeMorse = (morseCode) => {
    const morseWords = morseCode.split('  ')
    let resText = ''

    morseWords.forEach(word => {
        const morseSymbols = word.split('')

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

const bits = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'

console.log(decodeMorse(decodeBits(bits)))
