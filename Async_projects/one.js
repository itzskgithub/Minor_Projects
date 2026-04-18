/*
const randomcolor = function(){
    let color = '#';
    let hex = '0123456789ABCDEF';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};

function changecolor() {document.body.style.backgroundColor = randomcolor()};
let id;
document.querySelector('#start').addEventListener('click' , function(){
    if(!id){
        id = setInterval(changecolor, 50);
    }
});

    document.querySelector('#stop').addEventListener('click' , function(){
    clearInterval(id);
    id = null;

});
*/

let hex = "0123456789ABCDEF";

function randomcolor() {
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

function changebgcolor() {
    document.body.style.backgroundColor = randomcolor();
};

let id;
document.querySelector('#start').addEventListener('click' , () => {
    if(!id){
        id = setInterval(changebgcolor , 50);
    }
});

document.querySelector('#stop').addEventListener('click' , () => {
    clearInterval(id);
    id = null;
});