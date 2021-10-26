function sortArray(array) {
    let incomingArray = [],
        oddArray = []        

    incomingArray = array.map(item => {
        if (item % 2 !== 0) {
            oddArray.push(item)
        } else {
            return item
        }
    })

    oddArray.sort(function(a, b) { return a - b })

    incomingArray = incomingArray.map(item => {
        if (typeof(item) === 'undefined') {
            return oddArray.shift(item)
        } else {
            return item
        }
    })

   return incomingArray
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
