const sketch = document.getElementById('sketch');

const sketchBoard = (n) => {
    const newDiv = document.createElement('div'); 
    newDiv.id = "board"; 

    for(let i=0; i<n; i++){
        const col = document.createElement('div');
        col.className = "col";

        for(let j=0; j<n; j++){
            const tile = document.createElement('div');
            tile.className = "tile";
            tile.style.padding = `${360/n}px`;

            col.appendChild(tile);
        }
        newDiv.appendChild(col);
    }

    sketch.appendChild(newDiv);

    const hover = document.querySelectorAll('.tile');

    hover.forEach(h =>  {
        h.addEventListener('mouseover', () => {
            h.style.backgroundColor = "black";
    })
})
}

sketchBoard(16);