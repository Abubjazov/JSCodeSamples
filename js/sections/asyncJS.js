// setTimeout(() => {
//     alert('Hello from setTimeout')
// }, 2000);

let interval = setInterval(() => {
    console.log('Hello from setInterval')
}, 2000);

setTimeout(() => {
    clearInterval(interval)
    console.log('stop setInterval')
}, 6000);
