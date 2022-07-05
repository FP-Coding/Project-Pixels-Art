const pixelBoard = document.getElementById('pixel-board');
const lines = document.getElementsByClassName('line');
const pixels = document.getElementsByClassName('pixel');
const colorSelected = document.getElementsByClassName('selected');
const firstColor = document.getElementById('first-color');
const secondColor = document.getElementById('second-color');
const thirdColor = document.getElementById('third-color');
const fourthColor = document.getElementById('fourth-color');
const paletteColor = document.getElementById('color-palette');
const btnClearBoard = document.getElementById('clear-board');
const btnGenerateBoard = document.getElementById('generate-board');
const input = document.getElementById('board-size');
firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = 'red';
thirdColor.style.backgroundColor = 'yellow';
fourthColor.style.backgroundColor = 'green';
let boardSize = 5;

function getColor(event) {
  const evento = event;
  for (let i = 0; i < colorSelected.length; i += 1) {
    colorSelected[i].classList.remove('selected');
  }
  evento.target.classList.add('selected');
  colorSelected[0].style.backgroundColor = evento.target.style.backgroundColor.value;
}

function inputColor(event) {
  const evento = event;
  evento.target.style.backgroundColor = colorSelected[0].style.backgroundColor;
  console.log(evento.target.style.backgroundColor);
}

function createLines(numberLines) {
  for (let i = 0; i < numberLines; i += 1) {
    const linePixels = document.createElement('div');
    linePixels.className = 'line';
    pixelBoard.appendChild(linePixels);
  }
}

function createBoard(numberPixels) {
  createLines(numberPixels);
  for (let i = 0; i < numberPixels; i += 1) {
    for (let index = 0; index < numberPixels; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', inputColor);
      lines[index].appendChild(pixel);
    }
  }
  boardSize = numberPixels;
}

createBoard(boardSize);

function removeBoard(currentBoardSize) {
  if (input.value >= 5) {
    for (let i = 0; i < currentBoardSize; i += 1) {
      pixelBoard.removeChild(pixelBoard.firstChild);
    }
  }
}

function resetBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function startFirstColorAsBlack() {
  firstColor.classList.add('selected');
}

function verifyInputNull() {
  let errorMensage = '';
  if (input.value === '') {
    errorMensage = 'Board Inválido!';
    alert(errorMensage);
  }
}

paletteColor.addEventListener('click', getColor);
btnClearBoard.addEventListener('click', resetBoard);
btnGenerateBoard.addEventListener('click', verifyInputNull);
btnGenerateBoard.addEventListener('click', () => {
  removeBoard(boardSize);
  createBoard(input.value);
  resetBoard();
});

window.onload = function executeOnLoad() {
  resetBoard();
  startFirstColorAsBlack();
};
