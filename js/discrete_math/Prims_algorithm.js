// const graphМertices = {
//     'Aberdeen': {
//         id: 1,
//         connections: [{ id: 2, distance: 120 }, { id: 3, distance: 147 }, { id: 4, distance: 142 }, { id: 5, distance: 107 }, { id: 6, distance: 81 }]
//     },
//     'Edinburgh': {
//         id: 2,
//         connections: [{ id: 1, distance: 120 }, { id: 3, distance: 132 }, { id: 4, distance: 42 }, { id: 5, distance: 157 }, { id: 6, distance: 45 }]
//     },
//     'Fort william': {
//         id: 3,
//         connections: [{ id: 1, distance: 147 }, { id: 2, distance: 132 }, { id: 4, distance: 108 }, { id: 5, distance: 66 }, { id: 6, distance: 105 }]
//     },
//     'Glasgow': {
//         id: 4,
//         connections: [{ id: 1, distance: 142 }, { id: 2, distance: 42 }, { id: 3, distance: 108 }, { id: 5, distance: 168 }, { id: 6, distance: 61 }]
//     },
//     'Inverness': {
//         id: 5,
//         connections: [{ id: 1, distance: 107 }, { id: 2, distance: 157 }, { id: 3, distance: 66 }, { id: 4, distance: 168 }, { id: 6, distance: 112 }]
//     },
//     'Perth': {
//         id: 6,
//         connections: [{ id: 1, distance: 81 }, { id: 2, distance: 45 }, { id: 3, distance: 105 }, { id: 4, distance: 61 }, { id: 5, distance: 112 }]
//     }
// }

const towns = ['Aberdeen', 'Edinburgh', 'Fort william', 'Glasgow', 'Inverness', 'Perth']
const adjacencyMatrix = [[0, 120, 147, 142, 107, 81], [120, 0, 132, 42, 157, 45], [147, 132, 0, 108, 66, 105], [142, 42, 108, 0, 168, 61], [107, 157, 66, 168, 0, 112], [81, 45, 105, 61, 112, 0]]

const pathfinder = (startPoint, towns, adjacencyMatrix) => {
    let remainingTowns = towns.filter(item => item !== startPoint)
    let resultArr = [], currentIndex = towns.indexOf(startPoint)

    resultArr.push(towns[currentIndex])
    console.log(remainingTowns, currentIndex, resultArr)

    let minDist = adjacencyMatrix[currentIndex][0]

    adjacencyMatrix[currentIndex].forEach(item => {
        if (item < minDist && item != 0 && resultArr.indexOf(item) == -1) {
            minDist = item
        }
    })

    currentIndex = adjacencyMatrix[currentIndex].indexOf(minDist)
    resultArr.push(towns[currentIndex])
    remainingTowns = remainingTowns.filter(item => item !== towns[currentIndex])

    console.log(remainingTowns, currentIndex, resultArr)

    currentIndex = towns.indexOf(remainingTowns[0])

    minDist = adjacencyMatrix[currentIndex][0]

    adjacencyMatrix[currentIndex].forEach(item => {
        if (item < minDist && item != 0 && resultArr.indexOf(item) == -1) {
            minDist = item
        }
    })

    currentIndex = adjacencyMatrix[currentIndex].indexOf(minDist)
    resultArr.push(towns[currentIndex])
    remainingTowns = remainingTowns.filter(item => item !== towns[currentIndex])

    console.log(remainingTowns, currentIndex, resultArr)
}

pathfinder('Perth', towns, adjacencyMatrix)
