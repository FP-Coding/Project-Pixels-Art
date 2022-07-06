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
const colorsRandom = [secondColor, thirdColor, fourthColor];
firstColor.style.backgroundColor = 'black';
let boardSize = 5;

function randomColor() {
  const arrayColors = [];
  while (arrayColors.length < 3) {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    const cor = `rgb(${red}, ${green}, ${blue})`;
    if (arrayColors.includes(cor) === false && cor !== 'rgb(0,0,0)' && cor !== 'rgb(255,255,255)') {
      arrayColors.push(`rgb(${red},${green},${blue})`);
      console.log(`rgb(${red},${green},${blue})`);
    }
  }
  return arrayColors;
}

function applyRandomColor(arrayElements) {
  const colors = randomColor();
  const elements = arrayElements;
  for (let index = 0; index < colors.length; index += 1) {
    elements[index].style.backgroundColor = `${colors[index]}`;
  }
}

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
}

function createLines(numberLines) {
  for (let i = 0; i < numberLines; i += 1) {
    const linePixels = document.createElement('div');
    linePixels.className = 'line';
    pixelBoard.appendChild(linePixels);
  }
}

function verifyInputValue(value) {
  let valueSize = value;
  if (valueSize < 5) {
    valueSize = 5;
  } else if (valueSize > 50) {
    valueSize = 50;
  }
  return valueSize;
}

function createBoard(numberPixels) {
  const rightValue = verifyInputValue(numberPixels);
  const sizeBoardValue = rightValue;
  createLines(rightValue);
  for (let i = 0; i < sizeBoardValue; i += 1) {
    for (let index = 0; index < sizeBoardValue; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', inputColor);
      lines[index].appendChild(pixel);
    }
  }
  boardSize = sizeBoardValue;
}

function removeBoard(currentBoardSize) {
  for (let i = 0; i < currentBoardSize; i += 1) {
    pixelBoard.removeChild(pixelBoard.firstChild);
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
  createBoard(boardSize);
  resetBoard();
  startFirstColorAsBlack();
  applyRandomColor(colorsRandom);
};
