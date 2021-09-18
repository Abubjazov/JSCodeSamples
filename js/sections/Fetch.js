document.querySelector('.load__users').addEventListener('click', () => {
    const targetURL = 'https://jsonplaceholder.typicode.com/users'

    fetch(targetURL)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            let ul = document.querySelector('.result')

            let html = json.map((item) => {
                return `<li>uid: ${item.id}, user name: ${item.name}, e-mail: ${item.email}</li>`
            })

            // ul.insertAdjacentHTML('afterbegin', html.join(' '))
            ul.innerHTML = html.join(' ')
        })
})
