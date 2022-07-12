var container = document.querySelector('#container');















for(x=0; x<16; x++) {
    const squareGrid = document.createElement('div');
    squareGrid.classList.add('squareGrid');
    squareGrid.style.border = "solid";
    squareGrid.style.padding = "20px 20px";
    squareGrid.style.width = "120px";
    squareGrid.style.display = "inline-block"
   container.appendChild(squareGrid);
  
}
