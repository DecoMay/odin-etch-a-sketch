const div = document.querySelector('.container');
const CANVAS_SIZE = 600;

for (let i = 0; i < (16 * 16); i++) {
    let gridDiv = document.createElement('div');
    gridDiv.textContent = `${i}`;
    gridDiv.style.width = `${(600 / 16)}px`;
    gridDiv.style.height = `${(600 / 16)}px`;
    gridDiv.classList.add('grid');
    div.appendChild(gridDiv);
}
