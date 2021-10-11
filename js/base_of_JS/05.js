function first() {
    setTimeout(function() {
        console.log(1)
    }, 500)
}

function second() {
        console.log(2)
}

// first()
// second()

function learnJS(lang, callback1, callback2) {
    console.log(`I learn ${lang}`)
    callback1()
    callback2()
}    

learnJS('JS', first, second)
