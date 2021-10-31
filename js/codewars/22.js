decodeMorse = function(morseCode){
    const morseWords = morseCode.split('   ')
    let resText = ''

    morseWords.forEach((word, index) => {
        const morseSymbols = word.split(' ')

        morseSymbols.forEach(symbol => {
            resText += typeof(MORSE_CODE[symbol]) !== 'undefined' ?  MORSE_CODE[symbol] : ''
        })
      
       resText += ' '
    })  
    
    return resText.trim()
}

decodeMorse('.... . -.--   .--- ..- -.. .')
