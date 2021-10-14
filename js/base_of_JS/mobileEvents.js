document.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('#btn_id')

    btn.addEventListener('touchstart', (e) => {
        e.preventDefault()

        console.log('Touch start')
        console.log(e.touches)
        console.log(e.targetTouches)
        console.log(e.changedTouches)
    })

    btn.addEventListener('touchmove', (e) => {
        e.preventDefault()

        console.log(e.targetTouches[0].pageX)
    })

    btn.addEventListener('touchend', (e) => {
        e.preventDefault()

        console.log('Touch end')
    })

    // btn.addEventListener('touchenter', (e) => {
    //     e.preventDefault()

    //     console.log('Touch enter')
    // })

    // btn.addEventListener('touchleave', (e) => {
    //     e.preventDefault()

    //     console.log('Touch leave')
    // })

})
