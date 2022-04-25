//creating the grid 
let grid = document.createElement('div');
let page = document.querySelector('.page');
page.appendChild(grid);
grid.classList.add('grid');

//creating the button that resets the grid color
let resetBtn = document.createElement('button');
resetBtn.classList.add('reset');
resetBtn.textContent = "Reset Grid Colors";
page.appendChild(resetBtn);


//function to create a 16x16 grid
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


// divs = grid.querySelectorAll('div')
// so for each div in grid, remove itself before creating the new grid which has the users input as a base number for the grid
function makeNewGrid() {
        divs.forEach(div => {
            div.remove();
        })
    let newGrid = prompt('New grid size? Input a number. Example: 20 will display a 20x20 grid. Cannot be over 20.');
    for (i=0; i<(newGrid * newGrid); i++) {
        let item = document.createElement('div');
        grid.appendChild(item);
    } 
}

//what happens when u click the reset colors button
resetBtn.addEventListener('click', () => {
resetColor()
makeNewGrid()
});













