function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, ms)
    })
}

let p1 = sleep(1000).then(() => ({name: 'Promise 1'}))
let p2 = sleep(2000).then(() => ({name: 'Promise 2'}))
let p3 = sleep(3000).then(() => ({name: 'Promise 3'}))

async function start() {
    const dataAll = await Promise.all([p1, p2, p3])
    const dataRace = await Promise.race([p1, p2, p3])

    console.log('dataAll', dataAll)
    console.log('dataRace', dataRace)
}


start()

// Promise.all([p1, p2, p3]).then((data) => console.log(data))
// Promise.race([p1, p2, p3]).then((data) => console.log(data))
