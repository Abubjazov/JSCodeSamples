function check(word) {
    const strArr = [...word.toLowerCase()]
    let   strSet = [...(new Set([...strArr]))],
          strRes = [] 

    if (strArr.length === strSet.length) {        
        return strArr.map(() => '(').join('')
    }

    strArr.forEach(item => {
        strSet = []

        strArr.forEach(i => {
            if (i === item) {
                strSet.push(true)
            } else {
                strSet.push(false)
            }
        })

        let counter = 0

        strSet.forEach(item => {
            item ? counter++ : null
        })

        counter > 1 ? strRes.push(')') : strRes.push('(')
    })

    return strRes.join('')
}

console.log(check('(( @'))


