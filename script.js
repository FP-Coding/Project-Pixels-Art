const pixelBoard = document.getElementById('pixel-board');
const lineFather = document.getElementsByClassName('line');
const pixels = document.getElementsByClassName('pixel');

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

function resetaQuadro() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

window.onload = resetaQuadro;
