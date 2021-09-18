class MyPromise {
    constructor(callback) {
        this.onCatch = null
        this.onFinally = null
        this.onThen = []
        this.isRejected = false

        function resolver(data) {
            if (this.isRejected) {
                return
            }
            
            this.onThen.forEach(callback => {
                data = callback(data)
            })

            if (this.onFinally) {
                this.onFinally()
            }
        }
        function rejecter(error) {
            this.isRejected = true

            if (this.onCatch) {
                this.onCatch(error)
            }

            if (this.onFinally) {
                this.onFinally()
            }
        }

        callback(resolver.bind(this), rejecter.bind(this))
    }

    then(callback) {
        this.onThen.push(callback)
        return this
    }

    catch(callback) {
        this.onCatch = callback
        return this
    }

    finally(callback) {
        this.onFinally = callback
        return this
    }
}

const promise = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        reject('Some error')
        resolve(10)
    }, 2000);
})

promise
    .then(numb => numb *= numb)
    .then(numb => numb *= 3)
    .catch(err => console.error(err))
    .finally(() => console.log('FINALLY'))
    .then(numb => console.log(numb))
