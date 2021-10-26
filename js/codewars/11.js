function pigIt(str){
    let strArr = str.split(' ')

    return strArr = strArr.map(item => {
        if (item.match(/\w/g)) {
            let temp = item.slice(0, 1) + 'ay',
                tempW = item.slice(1, item.length)
 
            return `${tempW}${temp}`
        } else {
            return item
        }
    }).join(' ')
}



console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
