const SIZE = 16;
const container = document.querySelector(".container");
let grid = [];

for (let r = 0; r < SIZE; r++){
    grid[r] = []
    for (let c = 0; c < SIZE; c++){
        grid[r][c] = document.createElement("div");
        grid[r][c].classList.add("square");
    }
}

for (const row of grid){
    for (const item of row){
        container.appendChild(item);
    }
}