var container = document.querySelector('#container');















for(x=0; x<256; x++) {
    const squareGrid = document.createElement('div');
    squareGrid.classList.add('squareGrid');
    squareGrid.style.border = "solid 1px";
    squareGrid.style.padding = "20px 20px";
    squareGrid.style.width = "20px";
    squareGrid.style.display = "inline-block";
    container.appendChild(squareGrid);
  
}
