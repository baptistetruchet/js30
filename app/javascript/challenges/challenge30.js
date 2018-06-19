function startGame() {
  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');

}

function challenge30() {
  document.querySelector('.start-game').addEventListener('click', startGame);
}

export { challenge30 }
