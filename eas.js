const container = document.querySelector('#container')

function refreshBox(){
    let del = document.getElementById('container');
    while (del.hasChildNodes()){
        del.removeChild(del.firstChild);
    }
    boxSize();
}

function boxSize(){

let num = Number(prompt('How many pixels'));
//let num = 16

if (num>100){
    alert('ERROR, you can\'t do more than 100 pixels, reload the website and try again')
}else{
let pixSize = 500/num
qpix=num*num
for(let i=0;i<qpix;i++){
    const pix = document.createElement('div')
    pix.addEventListener('mouseover', () => {
        pix.style.backgroundColor = 'red';
    })
    pix.classList.add('pixels')
    pix.style.cssText='border: 0px solid black;'
    pix.style.height= `${pixSize}px`;
    pix.style.width = `${pixSize}px`;

    container.appendChild(pix)
}
}
}

