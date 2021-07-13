let obj = {
    dog: 'Puppy',
    cat: 'Murr'
};

let answers = ['Ваше имя: ', 'Ваша фамилия: ', 'Ваш возраст: '];

for (let i = 0; i < answers.length; i++) {
    answers[i] = prompt(answers[i], '');
    console.log(answers[i]);
}

console.log(answers);
answers = ['Ваше имя: ', 'Ваша фамилия: ', 'Ваш возраст: '];
console.log(answers);

let i = 0;
do {
    answers[i] = prompt(answers[i], '');
    console.log(answers[i]);
    i++;
} while (i < answers.length);

console.log(answers);
answers = ['Ваше имя: ', 'Ваша фамилия: ', 'Ваш возраст: '];
console.log(answers);

i = 0;
while (i < answers.length) {
    answers[i] = prompt(answers[i], '');
    console.log(answers[i]);
    i++;
}

console.log(answers);
