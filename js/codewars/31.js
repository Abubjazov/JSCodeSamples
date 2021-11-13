// function triangle(row) {
//     const COLOR_COMBINATIONS = { 'RR': 'R', 'GG': 'G', 'BB': 'B', 'BG': 'R', 'GB': 'R', 'RG': 'B', 'GR': 'B', 'BR': 'G', 'RB': 'G' }
//     let rowArr = [...row]

//     const recalcColors = (colorsArr) => {
//         if (colorsArr.length === 1) return colorsArr[0]

//         res = []

//         colorsArr.forEach((elem, index) => {
//             if (index !== colorsArr.length - 1) res.push(COLOR_COMBINATIONS[elem + colorsArr[index + 1]])
//         })

//         return recalcColors(res)
//     }

//     return recalcColors(rowArr)
// }

// const row = 'RBGRBGBRGBRBRGGRBBGRBGBRBBGRBGGBRBGBBGRBGBRGRBGRBB'

// console.log(triangle(row))

// ['B', 'B'], R = 1, G = 2, B = 3
// ['GB', 'R'],
// ['RRR', 'R'],
// ['RGBG', 'B'],
// ['RBRGBRB', 'G'], G = 1
// ['RBRGBRBGGRRRBGBBBGG', 'G'], 19
// ['BGRGRBGBRRBBGRBGBBRBRGBRG', 'B'], 25 
// ['GRBGRRRBGRBGRGBRGBRBRGBRRGRBGRGBB', 'R'], 33                   R  G1  B7
// ['RBGRBGBRGBRBRGGRBBGRBGBRBBGRBGGBRBGBBGRBGBRGRBGRBB', 'G'],50[ 14, 15, 21 ]                                       1   
// ['BGBGRBGRRBGRBGGGRBGRGBGRRGGRBGRGRBGBRGBGBGRGBGBGBGRRBRGRRGBGRGBRGRBGRBGRBBGBRGRGRBGRGBRGBBRGGBRBGGRB', 'G']100[ 31, 39, 30 ]

// Colour here:            GG        B G        R G        B R
// Becomes colour here:     G          R          B          G

// function triangle(row) {
//     const COLOR_COMBINATIONS = { 'RR': 'R', 'GG': 'G', 'BB': 'B', 'BG': 'R', 'GB': 'R', 'RG': 'B', 'GR': 'B', 'BR': 'G', 'RB': 'G' }
//     let rowArr = [...row]

//     const recalcColors = (colorsArr) => {
//         if (colorsArr.length === 1) return colorsArr[0]
//         if (colorsArr.length < Math.floor(row / length)) {
//             let r = 0, g = 0, b = 0

//             for (let i = 0; i < colorsArr.length; i++) {
//                 const color = colorsArr.slice(i, i + 1)

//                 if (color === 'R') r++
//                 if (color === 'G') g++
//                 if (color === 'B') b++
//             }

//             if (r > g && r > b) return 'R'
//             if (g > r && g > b) return 'G'
//             if (b > g && b > r) return 'B'
//         }

//         res = []

//         colorsArr.forEach((elem, index) => {
//             if (index !== colorsArr.length - 1) res.push(COLOR_COMBINATIONS[elem + colorsArr[index + 1]])
//         })

//         return recalcColors(res)
//     }

//     return recalcColors(rowArr)
// }

// function triangle(row) {
//     const COLOR_COMBINATIONS = { 'RGB': 'G', 'RBG': 'B', 'BGR': 'G', 'BRG': 'R', GRB: 'R', GBR: 'B' }

//     let r = 0, g = 0, b = 0, res = ''

//     for (let i = 0; i < row.length; i++) {
//         const color = row.slice(i, i + 1)

//         if (color === 'R') r++
//         if (color === 'G') g++
//         if (color === 'B') b++
//     }

//     if (r < b && r < g) {
//         res += 'R'
//         if (b < g) {
//             res += 'GB'
//         } else { res += 'BG' }
//     }

//     if (b < r && b < g) {
//         res += 'B'
//         if (r < g) {
//             res += 'GR'
//         } else { res += 'RG' }
//     }

//     if (g < b && g < r) {
//         res += 'G'
//         if (b < r) {
//             res += 'RB'
//         } else { res += 'BR' }
//     }

//     return COLOR_COMBINATIONS[res]
// }


// function triangle(row) {
//     let r = 0, g = 0, b = 0

//     for (let i = 0; i < row.length; i++) {
//         const color = row.slice(i, i + 1)

//         if (color === 'R') r++
//         if (color === 'G') g++
//         if (color === 'B') b++
//     }

//     return [r, g, b] //[ 31, 39, 30 ] G BGR RGB BRG RBG / G
// }

const row = 'BGBGRBGRRBGRBGGGRBGRGBGRRGGRBGRGRBGBRGBGBGRGBGBGBGRRBRGRRGBGRGBRGRBGRBGRBBGBRGRGRBGRGBRGBBRGGBRBGGRB'

console.log(triangle(row))

function triangle(res) {
    const COLOR_COMBINATIONS = { 'RR': 'R', 'GG': 'G', 'BB': 'B', 'BG': 'R', 'GB': 'R', 'RG': 'B', 'GR': 'B', 'BR': 'G', 'RB': 'G' } //RGB = G RBG = B  BGR = G BRG = R GRB = R GBR = B

    const recalcColors = (res) => {
        if (res.length === 1) return res

        let resRow = ''

        for (let i = 0; i < res.length - 1; i++) {
            resRow += COLOR_COMBINATIONS[res.slice(i, i + 2)]
        }

        return recalcColors(resRow)
    }

    return recalcColors(res)
}
