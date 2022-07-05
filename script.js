const pixelBoard = document.getElementById('pixel-board');
const lines = document.getElementsByClassName('line');
const pixels = document.getElementsByClassName('pixel');
const colorSelected = document.getElementsByClassName('selected');
const firstColor = document.getElementById('first-color');
const secondColor = document.getElementById('second-color');
const thirdColor = document.getElementById('third-color');
const fourthColor = document.getElementById('fourth-color');
const paletteColor = document.getElementById('color-palette');
firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = 'red';
thirdColor.style.backgroundColor = 'yellow';
fourthColor.style.backgroundColor = 'green';

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

paletteColor.addEventListener('click', getColor);

function createLines(numberLines) {
  for (let i = 0; i < numberLines; i += 1) {
    const linePixels = document.createElement('div');
    linePixels.className = 'line';
    pixelBoard.appendChild(linePixels);
  }
}

function CreateBoard(numberPixels) {
  createLines(numberPixels);
  for (let i = 0; i < numberPixels; i += 1) {
    for (let index = 0; index < numberPixels; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.addEventListener('click', inputColor);
      lines[index].appendChild(pixel);
    }
  }
}

CreateBoard(5);

function resetBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function startFirstColorBlack() {
  firstColor.classList.add('selected');
}

window.onload = function executeOnLoad() {
  resetBoard();
  startFirstColorBlack();
};
