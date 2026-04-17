let wt = document.querySelector("#weight");
let ht = document.querySelector("#height");
let btn = document.querySelector("#button");
let result = document.querySelector(".bmi-result");

btn.addEventListener("click", () => {
    // get values
    let weight = parseFloat(wt.value);
    let height = parseFloat(ht.value) / 100;  // cm to m

    // calculate BMI
    let BMI = weight / (height * height);

    // check BMI category
    if (BMI < 18.5) {
        result.innerText = `BMI is ${BMI.toFixed(2)} (Underweight)`;
    } 
    else if (BMI >= 18.5 && BMI <= 24.9) {
        result.innerText = `BMI is ${BMI.toFixed(2)} (Normal weight)`;
    } 
    else if (BMI >= 25 && BMI <= 29.9) {
        result.innerText = `BMI is ${BMI.toFixed(2)} (Overweight)`;
    } 
    else {
        result.innerText = `BMI is ${BMI.toFixed(2)} (Obese)`;
    }
});
