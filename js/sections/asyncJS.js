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
    }, 100)
})

promise.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Server to Database: i need users list')
            console.log('Request sending ...')
            resolve()
        }, 100)
    })
})
.then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usersD = [
                {uid: 1, user: 'user 1'},
                {uid: 2, user: 'user 2'},
                {uid: 3, user: 'user 3'},
                {uid: 4, user: 'user 4'},
                {uid: 5, user: 'user 5'}
            ]
            console.log('Database: prepare users list')
            console.log(usersD)
            resolve(usersD)
        }, 100)        
    })
})
.then((usersD) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Database to Server: users list')
            console.log('Response sending ...')
            const usersDS = usersD.map((user) => {
                return {
                    id: user.uid,
                    login: user.user,
                    timestamp: Date.now()
                }
            })
            console.log(usersDS)
            resolve(usersDS)
        }, 100)        
    })
})
.then((usersDS) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usersSC = usersDS.map((user) => {
                return {
                    id: user.uid,
                    login: user.user,
                    timestamp: Date.now()
                }
            })
            console.log('Server to Client: users list')
            console.log('Response sending ...')
            console.log(usersSC)
            resolve(usersSC)
        }, 100)        
    })
})
.then((usersSC) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usersC = usersSC.map((user) => {
                return {
                    id: user.uid,
                    login: user.user,
                    timestamp: Date.now()
                }
            })
            console.log('Client: users list')
            console.log('Response received')
            console.log(usersC)
            resolve()
        }, 100)        
    })
})
.catch((error) => {
    console.error(error)
})
.finally(() => {
    console.log('Finally')
})
