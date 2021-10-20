const rur = document.querySelector('#rur'),
      usd =  document.querySelector('#usd')

rur.addEventListener('input', () => {
    console.log(rur.value)
    const request = new XMLHttpRequest()

    try {
        request.open('GET', 'js/base_of_JS/current1.json')
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
        request.send()
    } catch(error) {
        console.log(error)
    }

    // request.addEventListener('readystatechange', () => {
    //     if (request.readyState === 4 && request.status === 200) {
    //         const current = (JSON.parse(request.response)).current.usd
            
    //         usd.value = rur.value * current
    //     } else {
    //         usd.value = 'Error...'
    //     }
    // })

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const current = (JSON.parse(request.response)).current.usd
            
            usd.value = rur.value * current
        }
    })
})
