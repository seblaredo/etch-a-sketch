const container = document.querySelector(".container");
const button = document.querySelector("button");
setGrid(16);
container.addEventListener('mouseover', (e)=>{
    let red = Math.floor(Math.random()*255+1);
    let green = Math.floor(Math.random()*255+1);
    let blue = Math.floor(Math.random()*255+1);
    let child = e.target.closest(".square");
    //child.classList.add("hover");
    //child.style.backgroudColor = `rgb(${red}, ${green}, ${blue})`;
    child.style.backgroundColor = "rgb(10, 0, 0)";
})

// container.addEventListener('mouseout', (e)=>{
//     let child = e.target.closest(".square");
//     child.classList.toggle("hover");
// })

button.addEventListener('click', (e)=>{
    let size = prompt("Input size of grid:");
    setGrid(size);
})
function setGrid(size){
    if (size > 100 || size < 1){
        alert("Invalid! Use a number between 1 and 100");
    }
    container.replaceChildren();
    let grid = [];
    for (let r = 0; r < size; r++){
        grid[r] = []
        for (let c = 0; c < size; c++){
            grid[r][c] = document.createElement("div");
            grid[r][c].classList.add("square");
            grid[r][c].style.flexBasis = 100/size + "%";
        }
    }
    
    for (const row of grid){
        for (const item of row){
            container.appendChild(item);
        }
    }

}