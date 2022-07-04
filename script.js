const pixelBoard = document.getElementById('pixel-board');
const lines = document.getElementsByClassName('line');
const pixels = document.getElementsByClassName('pixel');
const firstColor = document.getElementById('first-color');

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

function selectedColor() {
  firstColor.classList.add('selected');
}

window.onload = function executeOnLoad() {
  resetBoard();
  selectedColor();
};
