let grid = document.createElement('div');
let page = document.querySelector('.page');
page.appendChild(grid);
grid.classList.add('grid');

//create a 16x16 grid
function makeGrid() {
    for (i=0; i<256; i++) {
        let item = document.createElement('div');
        grid.appendChild(item);
    }
}

makeGrid();

// let each grid piece change to a specific color when a mouseover action is performed
let divs = grid.querySelectorAll('div');

divs.forEach((div => {
    div.addEventListener('mouseover', function() {
    div.setAttribute('style', 'background-color: #FEAE51FF;');
})
}));

// function to reset the grid colors to the default
let resetColor = () => {
    divs.forEach(div => {
        div.setAttribute('style', 'background-color: white;');
    })
}

let resetBtn = document.createElement('button');
resetBtn.classList.add('reset');
resetBtn.textContent = "Reset Grid Colors";
page.appendChild(resetBtn);

resetBtn.addEventListener('click', () => resetColor());










