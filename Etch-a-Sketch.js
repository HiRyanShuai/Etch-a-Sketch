const sideContainer = 960;
let sideNumber = 96;
let drawMode = 'black';

const container = document.querySelector('#container');
const buttons = document.querySelector('#buttons');
const clear = document.querySelector('#clear');
const set = document.querySelector('#set');
const black = document.querySelector('#black');
const random = document.querySelector('#random');
const progressive = document.querySelector('#progressive');

function draw(event){
    switch(drawMode){
        case 'random':
            event.target.style.backgroundColor = 'rgb(' 
            + Math.floor(Math.random()*256) + ' ' 
            + Math.floor(Math.random()*256) + ' ' 
            + Math.floor(Math.random()*256) + ')';
            break;
        case 'progressive':
            console.log(event.target.style.backgroundColor);
            event.target.style.backgroundColor === '' ?
            event.target.style.backgroundColor = 'rgb(0 0 0 / 0.1)' :
            event.target.style.backgroundColor = 'rgb( from ' + event.target.style.backgroundColor + ' r g b / calc(alpha + 0.1)' ;
            break;
        default:
            event.target.style.backgroundColor = 'rgb(0 0 0)';
        }
}

function createLayout(sideCtner, sideNum){
    let sideLength = Math.floor(sideCtner / sideNum);
    let calSide = sideLength * sideNum + 'px';
    container.style.width = calSide;
    container.style.height = calSide;
    buttons.style.width = calSide;
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
        block.style.backgroundColor = '';
    };
});

set.addEventListener("click", (e)=>{
    //let length = 0;
    do{
        sideNumber = Math.floor(Number(prompt("Please input the number of squares per side [1~100]:")));
    } while(sideNumber < 1 || sideNumber > 100 || isNaN(sideNumber));
    createLayout(sideContainer, sideNumber);
});

black.addEventListener('click', (e)=>{
    drawMode = 'black';
    //createLayout(sideContainer, sideNumber);
});

random.addEventListener('click', (e)=>{
    drawMode = 'random';
    //createLayout(sideContainer, sideNumber);
});

progressive.addEventListener('click', (e)=>{
    drawMode = 'progressive';
    //createLayout(sideContainer, sideNumber);
});