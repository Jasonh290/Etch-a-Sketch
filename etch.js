const button = document.getElementById('button');
const sketch = document.getElementById('sketch');

const sketchBoard = (n) => {
    const board = document.createElement('div');
    board.id = "board";

    for(let i=0; i<n; i++){
        const col = document.createElement('div');
        col.className = "col";

        for(let j=0; j<n; j++){
            const tile = document.createElement('div');
            tile.className = "tile";
            tile.style.padding = `${(500)/(n * 2)}px`;

            col.appendChild(tile);
        }
        board.appendChild(col);
    }

    sketch.appendChild(board);

    const hover = document.querySelectorAll('.tile');

    hover.forEach(h =>  {
        h.addEventListener('mouseover', () => {
            h.style.backgroundColor = "black";
    })
})
}

sketchBoard(16);

const clearBoard = () => {
    const board = document.getElementById('board');
    board.remove();
}

button.addEventListener('click', () => {
    clearBoard();
    sketchBoard(window.prompt('Grid Size', 16));
})