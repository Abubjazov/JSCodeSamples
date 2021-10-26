function anagrams(word, words) {
    const wordSet = [...(new Set([...word]))].sort()   
    let   res = []

    words.forEach((item, index) => wordSet.join('') === [...(new Set([...item]))].sort().join('') && word.length === words[index].length ? res.push(words[index]) : null)

    if (res.length != 0) {
        const wordArr = word.split('')
        let tempRes = [],
            tempWord = []

        wordSet.forEach(elem => { 
            let e = 0

            wordArr.forEach(i => i === elem ? e++ : null)            
            tempWord.push(e)
        })

        res.forEach(elem => {
            let temp = []

            wordSet.forEach(elem => {
                let e = 0

                wordArr.forEach(i => i === elem ? e++ : null)
                temp.push(e)
            })
            
            temp[0] === tempWord[0] ? tempRes.push(elem) : null            
        })

        res = tempRes
    }

    return res
}

console.log(anagrams('abbaa', ['aaabb', 'baaab', 'bbaab']))
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) //=> ['aabb', 'bbaa']

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) //=> ['carer', 'racer']

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])) //=> []
