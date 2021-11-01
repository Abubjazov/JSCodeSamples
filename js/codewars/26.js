function encodeRailFenceCipher(string, numberRails) {
    let resStr = ''

    for (let i = 0; i < numberRails; i++) {
        let j = i , step = i == 0 || i % 2 == 0 ? numberRails + 1 : numberRails - 1

        resStr += string[j]

        while (j < string.length - step) {
            resStr += string[j + step]
            j += step
        }
    }

    return resStr
}

function decodeRailFenceCipher(string, numberRails) {
    segment1 = Math.floor(string.length / 3) - 1,
    segment2 = Math.floor(string.length / 2),
    i = 0, resObj = {}
    
    for (let j = 0; j < numberRails; j++) {
        let step = j == 0 || j % 2 == 0 ? numberRails + 1 : numberRails - 1, segment = 0, jSeg = j
    
        switch (j) {
            case 0:
                segment = segment1
                break
    
            case 1:
                segment = segment1 + segment2
                break
    
            case 2:
                segment = string.length
                break
    
            default:
                break
        }
    
        resObj[j] = string[i]
        i++
    
        while (i < segment) {
            resObj[jSeg + step] = string[i]
            jSeg += step
            i++
        }
    }
    
    return Object.values(resObj).join('')
}

console.log(decodeRailFenceCipher(encodeRailFenceCipher("0123456789ABCDEFGHIJ", 3), 3))

// [1]         [2]               [3]
//048CG     13579BDFHJ        26AEI    20
//048CGa    13579BDFHJ        26AEI    21
//048CGa    13579BDFHJb       26AEI    22
//048CGa    13579BDFHJb       26AEIc   23
//048CGa    13579BDFHJbd      26AEIc   24
//048CGae   13579BDFHJbd      26AEIc   25
//048CGae   13579BDFHJbdf     26AEIc   26
//048CGae   13579BDFHJbdf     26AEIcg  27
//048CGae   13579BDFHJbdfh    26AEIcg  28
//048CGaei  13579BDFHJbdfh    26AEIcg  29
//048CGaei  13579BDFHJbdfhj   26AEIcg  30
//048CGaei  13579BDFHJbdfhj   26AEIcgA 31
//048CGaei  13579BDFHJbdfhjB  26AEIcgA 32
//048CGaeiC 13579BDFHJbdfhjB  26AEIcgA 33

//[1]: Math.floor(str.length / 3) - 2
//[2]: Math.floor(str.length / 2)
