snail = function(array) {
    let top = 0, 
        right = array.length - 1, 
        bottom = array.length - 1, 
        left = 0,
        result = []
        
    if (array.length === 1) {return array[0]}

    while (top <= bottom && left <= right) {
        for (let j = left; j <= right; j++) {
            result.push(array[top][j])
        }
        top++
    
        for (let j = top; j <= bottom; j++) {
            result.push(array[j][right])
        }
        right--
    
        for (let j = right; j >= left; j--) {
            result.push(array[bottom][j])
        }
        bottom--
    
        for (let j = bottom; j >= top; j--) {
            result.push(array[j][left])
        }
        left++
    }

    return result
}

console.log(snail([[]]))
console.log(snail([[1]]))
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [1,2,3,6,9,8,7,4,5]
console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))
// snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]])
