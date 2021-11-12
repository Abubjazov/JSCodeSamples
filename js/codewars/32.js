function persistence(num) {
    let res = []

    const mulArr = (numArr) => {
        if (numArr.length === 1) return res.length

        let result = 1

        numArr.forEach((elem) => {
            result *= elem
        })

        res.push(result)

        return mulArr([...result.toString()])
    }

    return mulArr([...num.toString()])
}
