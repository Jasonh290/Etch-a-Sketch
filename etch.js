const sketch = document.getElementById('sketch');

const sketchBoard = () => {
    const newDiv = document.createElement('div'); 
    newDiv.id = "board"; 

    for(let i=0; i<16; i++){
        const a = document.createElement('div');
        a.className = "a";

        for(let j=0; j<16; j++){
            const b = document.createElement('div');
            b.className = "b";

            a.appendChild(b);
        }
        newDiv.appendChild(a);
    }

    sketch.appendChild(newDiv);
}

sketchBoard();