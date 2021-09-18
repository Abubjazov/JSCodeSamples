document.querySelector('.load__users').addEventListener('click', load)
const targetURL = 'https://jsonplaceholder.typicode.com/users'

async function load() {
    const data  = await (await fetch(targetURL)).json()

    document.querySelector('.result').innerHTML = data.map((item) => {
        return `<li>uid: ${item.id}, user name: ${item.name}, e-mail: ${item.email}</li>`
    }).join(' ')
}
