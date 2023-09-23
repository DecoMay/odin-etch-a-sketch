const div = document.querySelector('.container');
for (let i = 0; i < (16 * 16); i++) {
    let gridDiv = document.createElement('div');
    gridDiv.textContent = `${i}`;
    gridDiv.classList.add('grid');
    div.appendChild(gridDiv);
}