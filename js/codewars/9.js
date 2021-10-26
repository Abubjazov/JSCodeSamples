function validParentheses(parens){
    let parensArr = [],
        counter = 0
    
    parens.split('').forEach(item => {
        item === '(' || item === ')' ? parensArr.push(item) : null
    })

    parensArr.forEach(item => {
        if (item === '(') {
            counter++
        } else if (item === ')') {
            counter--
        }
    })

    return counter === 0 && parensArr.length > 1 && parensArr[0] === '(' && parensArr[parensArr.length - 1] === ')' ? true : false
}

console.log(validParentheses( "()" ))
console.log(validParentheses( ")(()))" ))
console.log(validParentheses( ")()" ))
console.log(validParentheses( "(())((()())())" ))
