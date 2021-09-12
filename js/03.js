document.querySelector('#alert').addEventListener('click', () => {
    alert('WOW');
});

document.querySelector('#confirm').addEventListener('click', () => {
    let dec = confirm('WOW WOW');

    console.log(dec);
});

document.querySelector('#prompt').addEventListener('click', () => {
    let dec = prompt('WOW WOW', 18);

    console.log(dec);
});

console.log('Сообщение');
console.info('Информация');
console.warn('Предупреждение');
console.error('Ошибка');

throw new Error('Error');
