var container = document.querySelector('#grid');
let square = document.querySelector('#square');
let submit = document.getElementById("#submit");
let userChoice = '';
let defaultValue = 16;
let gridSize = userChoice || defaultValue;
let button = document.getElementById("userBttn");
let resetBttn = document.getElementById("resetBttn");



grid.addEventListener ('mouseover', function (e){
    if (e.target.matches('.square')){
        e.target.classList.add('hoverSquare')
    }
}) 

button.addEventListener ("click", getSelection);

resetBttn.addEventListener ("click", resetGrid);



function resetGrid() {
    location.reload();
}

function getSelection() {

    userChoice = prompt("How big would you like the grid?")

    if (userChoice <= 100 && userChoice % 4 === 0) {
    createGrid(userChoice);
    } else getSelection()
} 


function createGrid (userChoice){
for(let x=0; x<Math.pow(userChoice, 2); x++) {
    container.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
    let square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
    
    
}}









  
  
