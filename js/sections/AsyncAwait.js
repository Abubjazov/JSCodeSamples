document.querySelector('.load__users').addEventListener('click', load)
const targetURL = 'https://jsonplaceholder.typicode.com/users'

async function load() {
    let response = await fetch(targetURL)
    let data = await response.json()

    let html = data.map((item) => {
        return `<li>uid: ${item.id}, user name: ${item.name}, e-mail: ${item.email}</li>`
    }).join(' ')

    document.querySelector('.result').innerHTML = html
}
