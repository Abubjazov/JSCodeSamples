// setTimeout(() => {
//     alert('Hello from setTimeout')
// }, 2000);

// let interval = setInterval(() => {
//     console.log('Hello from setInterval')
// }, 2000);

// setTimeout(() => {
//     clearInterval(interval)
//     console.log('stop setInterval')
// }, 6000);

/*
    Client -> Server -> Database -> Server -> Client
*/
// setTimeout(() => {
//     console.log('Client to Server: i need users list')
//     console.log('Request sending ...')

//     setTimeout(() => {
//         console.log('Server to Database: i need users list')
//         console.log('Request sending ...')

//         setTimeout(() => {
//             console.log('Database: prepare users list')
            
//             setTimeout(() => {
//                 console.log('Database to Server: users list')
//                 console.log('Response sending ...')
                
//                 setTimeout(() => {
//                     console.log('Server to Client: users list')
//                     console.log('Response sending ...')
                    
//                     setTimeout(() => {
//                         console.log('Client: users list')
//                         console.log('Response received')           
//                     }, 2000)
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)


let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Client to Server: i need users list')
        console.log('Request sending ...')
        resolve()
    }, 2000)
})

promise.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Server to Database: i need users list')
            console.log('Request sending ...')
            resolve()
        }, 2000)
    })
})
.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Database: prepare users list')
            resolve()
        }, 2000)        
    })
})
.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Database to Server: users list')
            console.log('Response sending ...')
            resolve()
        }, 2000)        
    })
})
.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Server to Client: users list')
            console.log('Response sending ...')
            resolve()
        }, 2000)        
    })
})
.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Client: users list')
            console.log('Response received')
            resolve()
        }, 2000)        
    })
})
