let $startBtn = document.querySelector('#start'),
    $game = document.querySelector('#game'),
    $score = document.querySelector('#result'),
    $time = document.querySelector('#time'),
    gameScore = 0;

$startBtn.addEventListener('click', startGame);
$game.addEventListener('click', gameClickHandler);

function startGame() {
    $startBtn.classList.add('hide');
    $score.parentNode.classList.remove('hide');
    $score.textContent = 0;
    $time.textContent = +(document.querySelector('#game-time').value);
    $game.style.background = '#fff';
    gameScore = 0;

    let summerTimer = setInterval(() => {
        if (+$time.textContent > 0) {
            $time.textContent = ((+$time.textContent) - 0.1).toFixed(1);
        } else {
            clearInterval(summerTimer);
            endGame();
        }
    }, 100);

    renderBox();
}

function renderBox() {
    // let isBox = document.querySelector('div [data-box="true"]');

    // if (isBox) {
    //     isBox.remove();
    // } или 

    $game.innerHTML = '';

    let box = document.createElement('div'),
        boxSide = getRandom(20, 100),
        boxTop = getRandom(0, $game.getBoundingClientRect().height - boxSide), 
        boxLeft = getRandom(0, $game.getBoundingClientRect().width - boxSide); 
        
    $time.style.color = '';

    box.setAttribute('data-box', 'true');
    box.style.cssText = `
                    position: absolute;
                    top: ${boxTop}px;
                    left: ${boxLeft}px;
                    width: ${boxSide}px;
                    height: ${boxSide}px;
                    background: ${randomColor()};
                    cursor: pointer;
                `;

    $game.insertAdjacentElement('afterbegin', box);
}

function gameClickHandler(e) {
    if (e.target.dataset.box) {
        $score.textContent = ++gameScore;
        renderBox();
    }
}

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function endGame() {
    $time.style.color = 'red';
    $game.innerHTML = '';
    $game.style.background = '#ccc';
    $startBtn.classList.remove('hide');
    $score.parentNode.classList.add('hide');

    let element = document.createElement('div');
    element.style.cssText = `
            position: absolute;
            top: 10px;
            `;
    element.textContent = `Игра окончена. Ваш результат: ${$score.textContent}`;
    $game.insertAdjacentElement('afterbegin', element);    
}

function randomColor() {
    let colors = ['black', 'grey', 'red', 'green', 'yellow', 'blue', 'Fuchsia', 'Lime', 'Olive', 'Aqua', 'Navy', 'Purple', 'OrangeRed', 'DeepPink'];
    return colors[getRandom(0, colors.length)];
}
