let a = [1, 2, 3]
let b = [5, 'Hello', 6]

Array.prototype.double = function() {
    return this.map(function(item) {
        if (typeof item === 'number') {
            return Math.pow(item, 2)
        } else if (typeof item === 'string') {
            return item += item
        } else {
            return 'INVALID VALUE'
        }        
    })
}

let newA = a.double()
let newB = b.double()

console.log(newA.double())
console.log(newB.double())
