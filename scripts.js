const div = document.querySelector('.container');
const BASE_CANVAS_SIZE = 600;
const clearButton = document.querySelector('#clear');
const changeRes = document.querySelector('#changeRes');
let gridRes = 10;

function createGrid() {
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }

    for (let i = 0; i < (gridRes * gridRes); i++) {
        let gridDiv = document.createElement('div');
        // gridDiv.textContent = `${i}`;
        gridDiv.style.width = `${(BASE_CANVAS_SIZE / gridRes)}px`;
        gridDiv.style.height = `${(BASE_CANVAS_SIZE / gridRes)}px`;
        gridDiv.classList.add('grid');
        gridDiv.addEventListener('mouseenter', changeColor);
        div.appendChild(gridDiv);
    }
}

function randomColor() {
    let hexValue = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexValue[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeColor(e) {
    let currentGrid = e.target;
    // if (currentGrid)
    currentGrid.style.background = randomColor();
    currentGrid.classList.add('colored');
    // currentGrid.style.color = 'white';
    console.log(e.target.className == 'grid colored');
}

createGrid();
clearButton.addEventListener('click', createGrid);
// changeRes.addEventListener('click', () => {
    // gridRes = 30;
    // createGrid();
// });