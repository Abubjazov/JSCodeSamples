function highAndLow(numbers) {
    let numbArr = numbers.split(' ')

    numbArr = numbArr.map(item => parseInt(item)).sort(function(a, b) { return a - b })

    return `${numbArr[numbArr.length - 1]} ${numbArr[0]}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
