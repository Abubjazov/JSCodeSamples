let $startBtn = document.querySelector('#start');
let $game = document.querySelector('#game');

$startBtn.addEventListener('click', startGame);

function startGame() {
    $startBtn.classList.add('hide');
    $game.style.background = '#fff';
    renderBox();
}

function renderBox() {
    let box = document.createElement('div');
    let boxTop, boxLeft, boxHeight, boxWidth, boxBackColor;

    box.style.cssText = `
                    position: absolute;
                    top: ${boxTop}px;
                    left: ${boxLeft}px;
                    width: ${boxWidth}px;
                    height: ${boxHeight}px;
                    background: ${boxBackColor};
                    cursor: pointer;
                `;

    $game.insertAdjacentElement('afterbegin', box);
}
