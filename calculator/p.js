const display = document.querySelector("#display input");
const buttons = document.querySelectorAll(".button");

let firstnumber = "";
let secondnumber = "";
let operator = "";
let shouldResetDisplay = false;


buttons.forEach(button => {
    button.addEventListener("click" , () => {
        const value = button.innerText;

        //clearscreen
        if(value === "C"){
            clearCalculator();
            return;
        }

        // equals
        if(value === "="){
            calculate();
            return;
        }

        //operator
        if(isOperator(value)){
            setOperator(value);
            return;
        }

        //dot & numbers
        appendNumber(value);
    })
});

function appendNumber(number){
    if(shouldResetDisplay){
        display.value = "";
        shouldResetDisplay = false;
    }

    //preventing multiple dots

    if(number === "." && display.value.includes(".")) return;

    display.value += number;
}

function clearCalculator(){
    firstnumber = "";
    operator = "";
    secondnumber = "";
    display.value = "";
}

function isOperator(value){
    return value === "+" || value === "-" || value === "*" || value === "/";
}

function setOperator(op){
    if (display.value === "") return;

    firstnumber = display.value;
    operator = op;
    shouldResetDisplay = true;
}

function calculate(){
    if(firstnumber === "" || operator === "" || display.value === "") return;

    secondnumber = display.value;

    let result;

    switch(operator){
        case "+" :
            result = Number(firstnumber) + Number(secondnumber);
            break;

        case "-" :
            result = Number(firstnumber) - Number(secondnumber);
            break;

        case "*" :
            result = Number(firstnumber) * Number(secondnumber);
            break;

        case "/" :
            result = secondnumber === "0" ? "Error" : Number(firstnumber) / Number(secondnumber);
    }

    display.value = result;
    firstnumber = "";
    secondnumber = "";
    operator = "";
}