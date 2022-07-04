const pixelBoard = document.getElementById('pixel-board');
const lineFather = document.getElementsByClassName('line');

function createLines(numberLines) {
  for (let i = 0; i < numberLines; i += 1) {
    const linePixels = document.createElement('div');
    linePixels.className = 'line';
    pixelBoard.appendChild(linePixels);
  }
}

function putPixels(numberPixels) {
  createLines(numberPixels);
  for (let i = 0; i < numberPixels; i += 1) {
    for (let index = 0; index < numberPixels; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      lineFather[index].appendChild(pixel);
    }
  }
}

putPixels(5);
