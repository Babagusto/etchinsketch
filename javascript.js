var container = document.querySelector('#container');
let square = document.querySelector('#square');
let squareGrid = document.querySelector('#squareGrid')


createGrid();

container.addEventListener ('mouseover', function (e){
    if (e.target.matches('.square')){
        e.target.classList.add('hoverSquare')
    }
}) 

function createGrid (i){
for(let x=0; x<16*16; x++) {
    let squareGrid = document.createElement('div');
    squareGrid.classList.add('square');
    container.appendChild(squareGrid);
    
}}

    //square.addEventListener ("mouseout", hover, false )

//squareGrid.addEventListener("mouseout", func1, false);







  
  
