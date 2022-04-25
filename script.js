let grid = document.createElement('div');

let page = document.querySelector('.page');

page.appendChild(grid);

grid.classList.add('grid');

function makeGrid() {
    for (i=0; i<256; i++) {
        let item = document.createElement('div');
        grid.appendChild(item);
    }
}

makeGrid();






