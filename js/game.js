let $startBtn = document.querySelector('#start');

$startBtn.addEventListener('click', startGame);

function startGame() {
    $startBtn.classList.add('hide');
    document.querySelector('#game').style.background = '#fff';
}
