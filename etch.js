const button = document.getElementById('button');
const sketch = document.getElementById('sketch');

const sketchBoard = (n) => {
    for(let i=0; i<n; i++){
        const col = document.createElement('div');
        col.className = "col";

        for(let j=0; j<n; j++){
            const tile = document.createElement('div');
            tile.className = "tile";
            tile.style.padding = `${1080/(n * 4)}px`;

            col.appendChild(tile);
        }
        sketch.appendChild(col);
    }

    const hover = document.querySelectorAll('.tile');

    hover.forEach(h =>  {
        h.addEventListener('mouseover', () => {
            h.style.backgroundColor = "black";
    })
})
}

sketchBoard(16);

button.addEventListener('click', () => {
    console.log('click');
})