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
    $time.textContent = document.querySelector('#game-time').value;
    $game.style.background = '#fff';
    renderBox();
}

function renderBox() {
    // let isBox = document.querySelector('div [data-box="true"]');

    // if (isBox) {
    //     isBox.remove();
    // }

    $game.innerHTML = '';

    let box = document.createElement('div'),
        boxSide = getRandom(20, 100),
        boxTop = getRandom(0, $game.getBoundingClientRect().height - boxSide), 
        boxLeft = getRandom(0, $game.getBoundingClientRect().width - boxSide),  
        boxBackColor = 'red' ;

    box.setAttribute('data-box', 'true');
    box.style.cssText = `
                    position: absolute;
                    top: ${boxTop}px;
                    left: ${boxLeft}px;
                    width: ${boxSide}px;
                    height: ${boxSide}px;
                    background: ${boxBackColor};
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
