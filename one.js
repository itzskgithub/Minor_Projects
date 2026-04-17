let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let result = document.querySelector("#result");

let is_X = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach(box => {
    box.addEventListener('click' , () => {
        if(is_X){
            box.innerText = "O";
            is_X = false;
        }
        else{
            box.innerText = "X";
            is_X = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

reset.addEventListener("click" , () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    is_X = true;
    result.innerText = "";
});

function checkWinner() {
    for(let pattern of winPatterns){
        const [a,b,c] = pattern;

        const val1 = boxes[a].innerText;
        const val2 = boxes[b].innerText;
        const val3 = boxes[c].innerText;
        if(val1 !== "" && val1 === val2 && val2 === val3){
        result.innerText = `Winner : ${val1}`;
        boxes.forEach(box => {box.disabled = true;});
        return;
        }
    }
}