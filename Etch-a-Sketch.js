const sideContainer = 960;
let sideNumber = 80;
let sideLength = Math.floor(sideContainer / sideNumber);
const container = document.querySelector('#container');

for(let i = 0; i < sideNumber * sideNumber; i++){
    const block = document.createElement("div");
    block.setAttribute('class','block');
    block.style.width = sideLength+'px';
    block.style.height = sideLength+'px';
    container.appendChild(block);
}