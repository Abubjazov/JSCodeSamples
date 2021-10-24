function getSum(a, b) {
    let aI = 0, bI = 0

    if (a > b) { 
        aI = b 
        bI = a
    } else {
        aI = a 
        bI = b
    }
    
    let res = 0
    for (let i = aI; i<= bI; i++) {
        res += i
    }

   return res
}

console.log(getSum(0, -2))
