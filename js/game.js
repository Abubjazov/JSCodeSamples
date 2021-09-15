let $startBtn = document.querySelector('#start'),
    $game = document.querySelector('#game'),
    $score = document.querySelector('#result'),
    gameScore = 0;

$startBtn.addEventListener('click', startGame);
$game.addEventListener('click', gameClickHandler);

function startGame() {
    $startBtn.classList.add('hide');
    $score.parentNode.classList.remove('hide');
    $score.textContent = 0;
    $game.style.background = '#fff';
    renderBox();
}

function renderBox() {
    let isBox = document.querySelector('div [data-box="true"]');

    if (isBox) {
        isBox.remove();
    }

    let box = document.createElement('div'),
        boxTop = 50, boxLeft = 50, boxSide = 70, boxBackColor = 'red' ;

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
        console.log($score);
        renderBox();
    }
}
