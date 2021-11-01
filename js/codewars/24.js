class RomanNum {
    constructor() {
        this.dpDict = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000, 1:'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'}
    }

    fromRoman(input) {
        let arabian = input.toUpperCase().split('').map(element => this.dpDict[element]),
        res = arabian[0]

        for (let i = 0; i < arabian.length - 1; i++) {
            if (arabian[i] >= arabian[i + 1]) {
                res += arabian[i + 1]
            } else {
                res -= arabian[i]
                res += arabian[i + 1] - arabian[i]
            }     
        }

        return res
    }

    toRoman(input) {
        let arabian = [...input+''].map(n=>+n).reverse(),
            key = {0: 1, 1: 10, 2: 100, 3: 1000},
            res = []

        arabian.forEach((numb, index) => {
            if (numb <= 3) {
                for (let i = 0; i < numb; i++) {
                    res.unshift(this.dpDict[key[index]])
                }
            } else {
                if (numb < 9) {
                    if (numb < 5) {
                        console.log('numb < 5')
                        res.unshift(this.dpDict[5 * key[index]])
                        for (let i = 0; i < 5 - numb; i++) {
                            res.unshift(this.dpDict[key[index]])
                        }
                    }
                    if (numb == 5) {
                        console.log('numb == 5')
                        res.unshift(this.dpDict[5 * key[index]])
                    }
                    if (numb > 5) {
                        console.log('numb > 5')
                        for (let i = 0; i < numb - 5; i++) {
                            res.unshift(this.dpDict[key[index]])
                        }
                        res.unshift(this.dpDict[5 * key[index]])
                    }
                } else {
                    console.log('numb = 9')
                    res.unshift(this.dpDict[key[index] * 10])
                    res.unshift(this.dpDict[key[index]])
                }                
            }
        })

        return res.join('')
    }
}

const RomanNumerals = new RomanNum()
