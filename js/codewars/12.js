const returnN = (arr) => {
    let checker = 0

    for (let i = 0; i < 3; i++) {
        arr[i] % 2 === 0 ? checker++ : null
    }

    if (checker >= 2) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {return arr[i]}            
        }
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {return arr[i]} 
        }
    }    
}



console.log(returnN([2, 4, 11, 0, 100, 4, 2602, 36]))
