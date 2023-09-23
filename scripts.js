const div = document.querySelector('.container');
const BASE_CANVAS_SIZE = 600;
const clearButton = document.querySelector('#clear');
const changeRes = document.querySelector('#changeRes');
const colorButton = document.querySelector('#colorMode');
let colorMode = 'black';
let gridRes = 10;

function createGrid() {
    if (!isNaN(gridRes)) {
        while (div.firstChild) {
            div.removeChild(div.lastChild);
        }
        for (let i = 0; i < (gridRes * gridRes); i++) {
            let gridDiv = document.createElement('div');
            gridDiv.style.width = `${(BASE_CANVAS_SIZE / gridRes)}px`;
            gridDiv.style.height = `${(BASE_CANVAS_SIZE / gridRes)}px`;
            gridDiv.classList.add('grid');
            gridDiv.addEventListener('mouseenter', changeColor);
            div.appendChild(gridDiv);
        }
    } else {
        return;
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
    if (colorMode === 'color') {
        currentGrid.style.background = randomColor();
    } else {
        currentGrid.style.background = 'black';
        // currentGrid.style.border = '1px solid white';
    }
    currentGrid.classList.add('colored');
    console.log(e.target.className == 'grid colored');
}

createGrid();
clearButton.addEventListener('click', createGrid);
colorButton.addEventListener('click', () => {
    if (colorMode === 'black') {
        colorMode = 'color';
        colorButton.style.background = randomColor();
    } else {
        colorMode = 'black';
        colorButton.style.background = 'black';
        colorButton.style.color = 'white';
    }
    createGrid();
});
changeRes.addEventListener('click', () => {
    gridRes = Number(prompt('1-100'));
    createGrid();
})