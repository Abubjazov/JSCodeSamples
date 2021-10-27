const zeros = (n) => {
    let a = n.toString(),
        res = 0,
        divider = 1

   for (let i = -2; i <= a.length; i++) {
        divider *= 5
        res += parseInt(n / divider)
   }

    return res
}

console.log(zeros(100000))
