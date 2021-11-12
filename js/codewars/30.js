const multiply = (a, b) => {
    if (/.../.test(a) || /.../.test(b)) {
        const arrA = a.split('.'), arrB = b.split('.')
        let strA = '', strB = '', zerroStr = '', zerros = 0

        if (/.../.test(a) && /.../.test(b)) {
            strA += arrA[0]
            strA += arrA[1]
            strB += arrB[0]
            strB += arrB[1]

            if (arrA[1].length > arrB[1].length) {
                for (let i = 0; i < arrA[1].length - arrB[1].length; i++) {
                    zerroStr += '0'
                }
                strB += zerroStr
                zerros = arrA[1].length
            }

            if (arrA[1].length < arrB[1].length) {
                for (let i = 0; i < arrB[1].length - arrA[1].length; i++) {
                    zerroStr += '0'
                }
                strA += zerroStr
                zerros = arrB[1].length
            }
        }
        if (/.../.test(a) && !/.../.test(b)) {
            strA += arrA[0]
            strA += arrA[1]
            strB += b

            for (let i = 0; i < arrA[1].length; i++) {
                zerroStr += '0'
            }
            strB += zerroStr
            zerros = arrA[1].length

        }

        if (!/.../.test(a) && /.../.test(b)) {
            strA += a
            strB += arrB[0]
            strB += arrB[1]


            for (let i = 0; i < arrB[1].length; i++) {
                zerroStr += '0'
            }
            strB += zerroStr
            zerros = arrB[1].length
        }

        let res = ((BigInt(parseInt(strA)) * BigInt(parseInt(strB)))).toString()

        const cutZerros = (res) => {

            for (let i = 1; i < res.length; i++) {
                if (res.charAt(res.length - i) !== '0') {
                    res = res.slice(0, res.length - i + 1)
                    return res
                }
            }
        }

        let resres = res === '0' ? res : res.slice(0, res.length - zerros * 2) + '.' + res.slice(res.length - zerros * 2)

        return cutZerros(resres)
    } else {
        return ((BigInt(parseInt(a)) * BigInt(parseInt(b)))).toString()
    }
}

console.log(multiply("2.01", "3.0000"))
