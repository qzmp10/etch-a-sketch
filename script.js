// GOTTA LOAD THE DEFAULT SIZE OF THE GRID WITH .onload AND MAKE A UNIVERSAL GRID FUNCTION. MAKENEWGRID IDEA IS TRASH.

//creating the grid 
let grid = document.createElement('div');
let page = document.querySelector('.page');
page.appendChild(grid);
grid.classList.add('grid');

//create input buttons that dictates the size of the grid
let btnContainer = document.createElement('div');
btnContainer.classList.add('btncontainer');
page.appendChild(btnContainer);

let gridSize = document.createElement('div');
gridSize.classList.add('sizeGrid');
gridSize.id = 'id'
gridSize.textContent = 'Set grid size :';
btnContainer.appendChild(gridSize);

let gridBtn16 = document.createElement('button');
gridBtn16.classList.add('btn');
gridBtn16.textContent = "16 x 16";
btnContainer.appendChild(gridBtn16);

let gridBtn32 = document.createElement('button');
gridBtn32.classList.add('btn');
gridBtn32.textContent = "32 x 32";
btnContainer.appendChild(gridBtn32);

let gridBtn64 = document.createElement('button');
gridBtn64.classList.add('btn');
gridBtn64.textContent = "64 x 64";
btnContainer.appendChild(gridBtn64);

//when user clicks button, set grid size
//if grid already has elements, remove them
// when user mouseover grid elements -> turn them to specified color

//16x16
gridBtn16.addEventListener('click', () => {
    if(grid.hasChildNodes) { 
        grid.innerHTML = ''
    }
    for (i=0; i < 16 * 16; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('sixteen');
        grid.appendChild(gridItem);
    } 
    grid.style.cssText = 'gap: 0.3em;';
    grid.style.cssText = 'grid-template-rows: repeat(16, 1fr);';
    grid.style.cssText = 'grid-template-columns: repeat(16, 1fr);';
    gridItems = grid.querySelectorAll('div');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.setAttribute('style', 'background-color: blueviolet;');
        });
    });
});

//32x32
gridBtn32.addEventListener('click', () => {
    if(grid.hasChildNodes) { 
        grid.innerHTML = ''
    }
    for (i=0; i < 32 * 32; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('thirtytwo')
        grid.appendChild(gridItem);
    } 
    grid.style.cssText = 'gap: 0.15em;';
    grid.style.cssText = 'grid-template-rows: repeat(32, 1fr);';
    grid.style.cssText = 'grid-template-columns: repeat(32, 1fr);';
    gridItems = grid.querySelectorAll('div');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.setAttribute('style', 'background-color: blueviolet;');
        });
    });
});

//64x64
gridBtn64.addEventListener('click', () => {
    if(grid.hasChildNodes) { 
        grid.innerHTML = ''
    }
    for (i=0; i < 64 * 64; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('sixtyfour');
        grid.appendChild(gridItem);
    } 
    grid.style.cssText = 'gap: 0.075em;';
    grid.style.cssText = 'grid-template-rows: repeat(64, 1fr);';
    grid.style.cssText = 'grid-template-columns: repeat(64, 1fr);';
    gridItems = grid.querySelectorAll('div');
    gridItems.forEach(gridItem => {
        gridItem.addEventListener('mouseover', () => {
            gridItem.setAttribute('style', 'background-color: blueviolet;');
        });
    });
});

//creating the button that resets the grid color
let resetBtn = document.createElement('button');
resetBtn.classList.add('reset');
resetBtn.id = 'id';
resetBtn.textContent = "Reset grid colors";
page.appendChild(resetBtn)

//reset the colors when user clicks on reset color
gridItems = grid.querySelectorAll('div');
resetBtn.addEventListener('click', () =>  {
    gridItems.forEach(gridItem => {
        gridItem.style = 'background-color: white;'
    });
});

// add mouseover effects for the grid buttons just for the style
gridBtn16.addEventListener('mouseover', () => {
    gridBtn16.classList.add('hovered');
});
gridBtn16.addEventListener('mouseout', () => {
    gridBtn16.classList.remove('hovered');
});

gridBtn32.addEventListener('mouseover', () => {
    gridBtn32.classList.add('hovered');
});
gridBtn32.addEventListener('mouseout', () => {
    gridBtn32.classList.remove('hovered');
});

gridBtn64.addEventListener('mouseover', () => {
    gridBtn64.classList.add('hovered');
});
gridBtn64.addEventListener('mouseout', () => {
    gridBtn64.classList.remove('hovered');
});

resetBtn.addEventListener('mouseover', () => {
    resetBtn.classList.add('hovered');
});
resetBtn.addEventListener('mouseout', () => {
    resetBtn.classList.remove('hovered');
});


















