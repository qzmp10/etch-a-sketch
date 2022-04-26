// GOTTA LOAD THE DEFAULT SIZE OF THE GRID WITH .onload AND MAKE A UNIVERSAL GRID FUNCTION. MAKENEWGRID IDEA IS TRASH.

//creating the grid 
let grid = document.createElement('div');
let page = document.querySelector('.page');
page.appendChild(grid);
grid.classList.add('grid');

//creating the button that resets the grid color
let resetBtn = document.createElement('button');
resetBtn.classList.add('btn');
resetBtn.textContent = "Reset grid colors";
page.appendChild(resetBtn)

//create an input button that dictates the size of the grid
let gridBtn = document.createElement('button');
gridBtn.classList.add('btn');
gridBtn.textContent = "Set grid Size";
page.appendChild(gridBtn);

//when user clicks button, prompt for the grid size
//if grid already has elements, remove them
gridBtn.addEventListener('click', () => {
    if(grid.hasChildNodes) { 
        grid.innerHTML = ''
    }
    let gridSize = prompt('Set a grid size. For example, typing 16 will make a 16x16 grid.');
    for (i=0; i < gridSize * gridSize; i++) {
        let gridItem = document.createElement('div');
        grid.appendChild(gridItem);
    }
})

// NEXT UP CHECK HOW TO FIT UR GRID ELEMENTS AUTOMATICALLY TO THE GRID  














