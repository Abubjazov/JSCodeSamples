function solution(list) {
    let res = '', range = false, rangeStart = 0

    for (let i = 0; i < list.length; i++) {
        if (list[i] + 1 !== list[i + 1] && list[i] + 2 !== list[i + 2] && !range) {
            res += list[i] + (i === list.length - 1 ? '' : ',')
        }
        if (list[i] + 1 === list[i + 1] && list[i] + 2 !== list[i + 2] && !range) {
            res += list[i] + (i === list.length - 1 ? '' : ',')
        }
        if (list[i] + 1 === list[i + 1] && list[i] + 2 === list[i + 2] && !range) {
            rangeStart = list[i]
            range = !range
        }
        if (list[i] + 1 !== list[i + 1] && range) {
            res += rangeStart + '-' + list[i] + (i === list.length - 1 ? '' : ',')
            range = !range
        }
    }

    return res
}

//[-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]), "-6,-3-1,3-5,7-11,14,15,17-20"
const list = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]

console.log(solution(list))
