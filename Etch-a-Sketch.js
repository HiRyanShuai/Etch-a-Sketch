const sideContainer = 960;
let sideNumber = 56;

const container = document.querySelector('#container');

function createLayout(sideCtner, sideNum){
    let sideLength = Math.floor(sideCtner / sideNum);
    container.replaceChildren();
    for(let i = 0; i < sideNum * sideNum; i++){
        const block = document.createElement("div");
        block.setAttribute('class','block');
        block.style.width = sideLength+'px';
        block.style.height = sideLength+'px';
        container.appendChild(block);
    }    
}

createLayout(sideContainer, sideNumber);