// let div = document.getElementById('playground');
// console.log(div);

// let p = document.getElementsByClassName('text');
// console.log(p);

// let h1 = document.getElementsByTagName('h1');
// console.log(h1);

// let div = document.querySelectorAll('p');
// console.log(div);

// let div0 = document.querySelector('.text');
// console.log(div0);

// let div1 = document.querySelectorAll('.text');
// console.log(div1);

// let div2 = document.querySelector('#playground');
// console.log(div2);

// let div3 = document.querySelectorAll('#playground');
// console.log(div3);

// let div4 = document.querySelectorAll('div#playground > ul li');
// console.log(div4);

// let div = document.querySelector('#playground');
// console.log(div.innerHTML);
// div.innerHTML = '<h2 style="color: red">From JavaScript</h2>';
// div = document.querySelector('h2');
// div.textContent = 'Changed from JS! )))';

// let a = document.querySelector('a');
// console.log(a.getAttribute('title'));
// let oldHref = a.getAttribute('href');
// console.log(a.attributes);

// a.setAttribute('href', 'https://yandex.ru');
// a.setAttribute('title', 'Go to Yandex');
// a.textContent = 'Yandex';

// let box1 = document.querySelector('#box1');
// let box2 = document.querySelector('#box2');

// box1.classList.add('green');
// box2.classList.remove('red');

// let hasClass = box1.classList.contains('green');
// console.log(hasClass);

// const button1 = document.querySelector('button');
// const text1 = document.querySelector('input');
// const h1 = document.querySelector('h1');

// button1.addEventListener('click', () => {
//     h1.textContent = text1.value;
// });

// h1.addEventListener('mouseenter', function() {
//     this.style.color = 'red';
// });
// h1.addEventListener('mouseleave', () => {
//     h1.style.color = 'green';
// });

let divs = document.querySelectorAll('div');
let link = document.querySelector('a');

divs.forEach(div => {
    div.addEventListener('click', function (sp) {
        sp.stopPropagation();
        console.log(this.getAttribute('id'));
    });
});

link.addEventListener('click', linkClick);

function linkClick(e) {
    e.preventDefault();

    // if (divs[0].style.display !=='none') {
    //     divs[0].style.display = 'none';
    // } else {
    //     divs[0].style.display = '';
    // }
      
    divs[0].style.display = divs[0].style.display !== 'none' ? 'none' : '';
}





