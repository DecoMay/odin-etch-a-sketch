const div = document.querySelector('.container');
const BASE_CANVAS_SIZE = 600;
const gridRes = 10;


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

function changeColor(e) {
    let currentGrid = e.target;
    currentGrid.style.background = 'black';
    // currentGrid.style.color = 'white';
}