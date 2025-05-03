const sideContainer = 960;
let sideNumber = 96;

const container = document.querySelector('#container');
const clear = document.querySelector('#clear');
const set = document.querySelector('#set');

function draw(event){
    event.target.style.backgroundColor = 'red';
}

function createLayout(sideCtner, sideNum){
    let sideLength = Math.floor(sideCtner / sideNum);
    container.style.width = sideLength * sideNum + 'px';
    container.style.height = sideLength * sideNum + 'px';
    container.replaceChildren();
    for(let i = 0; i < sideNum * sideNum; i++){
        const block = document.createElement("div");
        block.setAttribute('class','block');
        block.style.width = sideLength+'px';
        block.style.height = sideLength+'px';
        container.appendChild(block);
        block.addEventListener("mouseover", draw);
    }    
}

createLayout(sideContainer, sideNumber);

clear.addEventListener("click", (e) => {
    for (const block of container.children) {
        block.style.backgroundColor = 'unset';
    };
});

set.addEventListener("click", ()=>{
    let length = 0;
    do{
        length = Number(prompt("Please input the block amount of side [1~100]:"));
        console.log(length);
    } while(length < 1 || length > 100 || isNaN(length) );
    createLayout(sideContainer, length);
});