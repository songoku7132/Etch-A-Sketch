const container = document.querySelector('#container')

let colorChoise = 'black';

function refreshBox(){   
    let del = document.getElementById('container');
    while (del.hasChildNodes()){
        del.removeChild(del.firstChild);
    }
}

function boxSize(num){

refreshBox()
if (num>100){
    alert('ERROR, you can\'t do more than 100 pixels, reload the website and try again')
}else{
let pixSize = 500/num
qpix=num*num
for(let i=0;i<qpix;i++){
    const pix = document.createElement('div')
    pix.addEventListener('mouseover', colorSquare);
    pix.classList.add('pixels')
    pix.style.cssText='border: 0px solid black;'
    pix.style.height= `${pixSize}px`;
    pix.style.width = `${pixSize}px`;

    container.appendChild(pix)
}
}
}

function changeSize(input){
    boxSize(input)
}

function colorSquare() {
    this.style.backgroundColor = colorChoise;
}
 function changeColor(choise){
    colorChoise = choise;
 }