function toCamelCase(str){
    let strArr = []

    if (str.split('-').length > 1) {
       strArr = str.split('-')
    } else {
        strArr = str.split('_')
    }

    for (let i = 0; i < strArr.length; i++) {
        let temp = strArr[i].split('')
        if (i != 0) {
            temp[0] = temp[0].toUpperCase()
        }
        strArr[i] = temp.join('')
    }
    
    return strArr.join('')
}

str = "The-stealth-warrior"
toCamelCase(str)
