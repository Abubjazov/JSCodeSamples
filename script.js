//Циклы

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

//Функции

//function declaration
function sayHello(user) {
    console.log('Hello ' + user + '!');
}

i = 'Master';

sayHello(i);


//function declaration
function calc2(a, b) {
    return a + b;
}

console.log(calc2(13, Number('5')));


//function expression
let calc = function(a, b) {
    console.log(a + b);
};

calc(13, Number('5'));


function myFistFunction(name, age) {
    console.log(`Hello, my name is ${name} and this is my first function!`);

    function showSkills() {
        let skills = ['HTML5', 'CSS3', 'JS', 'GIT', 'Python', 'SQL'];
        console.log(`Я владею: `);
        for (let i = 0; i < skills.length; i++) {
            console.log(skills[i]);
        }
    }

    function checkAge() {
        if (Number(age) > 18) {
            console.log(`${name} у тебя отличные шансы стать tru'шным FrontEnd'ером`);
        } else {
            console.log(`${name} ты молодец что задумался о своём будущем! 
            Вперёд и только вперёд у тебя обязательно всё получится!!!`);
        }
    }

    function calcPow(number) {
        return Number(number)**2;
    }

    showSkills();
    checkAge();
    console.log(calcPow(9));
}

myFistFunction('Radik', '20');
