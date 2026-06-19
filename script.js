const container = document.querySelector(".container");
const button = document.querySelector("#size");
const buttonColor = document.querySelector("#color")
let colorMode = false;
setGrid(16);
container.addEventListener('mouseover', (e)=>{
    let red = Math.floor(Math.random()*255+1);
    let green = Math.floor(Math.random()*255+1);
    let blue = Math.floor(Math.random()*255+1);
    let child = e.target.closest(".square");
    const styles = window.getComputedStyle(child);
    if (colorMode){
        child.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;   
    } else {
        child.style.backgroundColor = `rgb(0, 0, 0)`;
    }
    
    child.style.opacity = Number(styles.opacity) + 0.1;
})

button.addEventListener('click', (e)=>{
    let size = prompt("Input size of grid:");
    setGrid(size);
})

buttonColor.addEventListener('click', (e)=>{
    if (colorMode) colorMode = false;
    else if (!colorMode) colorMode = true;
});

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