function sortArray(arr) {
    let counter = 0, zeros = 0

    iterate()

    function iterate() {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '0') {
                if (counter > 0) {
                    for (let j = 0; j < counter; j++) {
                        arr.push(arr.shift())
                    }
                }

                arr.shift()
                zeros++
                counter = 0

                return iterate()
            } else {
                counter++
            }
        }
    }

    arr.push(arr.shift())
    arr.push(arr.shift())

    for (let i = 0; i < zeros; i++) {
        arr.push(0)
    }

    return arr
}

let arr = [7, 2, 3, '0', 4, 6, 0, 0, 0, 78, 0, '0', 19, 14]

console.log(sortArray(arr))
