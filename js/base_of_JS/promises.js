console.log('Запрос данных')

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных')
    
        const product = {
            name: 'TV',
            price: 2000
        }
    
        resolve(product)        
    }, 2000)
})

req

.then(product => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'ordered'
            resolve(product)
        }, 2000)
    })
})

.then(product => {
    product.mod = true
    return product
})

.then(data => {
    console.log(data)
})

.catch(() => {
    console.error('Error has occured')
})

.finally(() => {
    console.log('отработка блока finally')
})

const test = time => {
    return new Promise(resolve => {
        console.log(time)
        setTimeout(() => resolve(), time)
    }) 
}

test(2000).then(() => console.log('2000 ms'))
test(4000).then(() => console.log('4000 ms'))

Promise.all([test(2000), test(4000)]).then(() => {
    console.log('all done')
})

Promise.race([test(2000), test(4000)]).then(() => {
    console.log('first done')
})
