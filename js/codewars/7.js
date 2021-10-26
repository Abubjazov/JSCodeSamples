function anagrams(word, words) {
    const wordSet = [...(new Set([...word]))].sort()   
    let   res = []

    words.forEach((item, index) => wordSet.join('') === [...(new Set([...item]))].sort().join('') && word.length === words[index].length ? res.push(words[index]) : null)

    if (res.length != 0) {
        let tempRes = [],
            tempWord = []

        wordSet.forEach(elem => { 
            tempWord.push([...word.matchAll(`${elem}`)].length)
        })

        res.forEach((elem) => {
            let temp = []

            wordSet.forEach(i => { 
                temp.push([...elem.matchAll(`${i}`)].length)
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
