function as(data) {
    const arr = data,
          set = [...(new Set([...arr]))]

    for (let i = 0; i < set.length; i++) {
        let counter = 0

        for (let j = 0; j < arr.length; j++) { set[i] === arr[j] ? counter++ : null }

        if (counter % 2 > 0) { return set[i] } 
    }
}

console.log(as([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]))
