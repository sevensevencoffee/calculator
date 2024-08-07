function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b===0) return "Can't divide by 0";
    return a/b;
}

let firstNum = null;
let operator = "";
let secNum = null;

function operate(operator, firstNum, secNum){
    if(operator === "+"){
        return add(firstNum, secNum);
    } else if(operator === "-"){
        return subtract(firstNum, secNum);
    } else if(operator === "x"){
        return multiply(firstNum, secNum);
    } else if(operator === "/") {
        return divide(firstNum, secNum);
    }
}

let displayValue = document.querySelector(".display")
let getNums = document.querySelectorAll(".num");
let resultComputed = false;


getNums.forEach(function(btn){
    btn.addEventListener('click', function(){
        if(resultComputed){
            displayValue.textContent="";
            resultComputed = false;
        }
            displayValue.textContent += btn.textContent;})
});


let getOperator = document.querySelectorAll(".op");
getOperator.forEach(function(btn){
    btn.addEventListener('click', function(){
        operator = btn.textContent;
        firstNum = parseFloat(displayValue.textContent);
        if (firstNum !== null) displayValue.textContent = "";
        })
    })

let equalBtn = document.querySelector(".result");
equalBtn.addEventListener('click', function(){
    secNum = parseFloat(displayValue.textContent);
    let result = (operate(operator, firstNum, secNum)).toString();
    displayValue.textContent = result;
    firstNum = result;
    secNum = null;
    operator = "";
    resultComputed = true;
})

let delBtn = document.querySelector(".del");
delBtn.addEventListener('click', function(){
    let delValue = displayValue.textContent.slice(0, -1);
    displayValue.textContent = delValue;
});

let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener('click', function(){
    firstNum = null;
    operator = "";
    secNum = null;
    displayValue.textContent = null;
})

let clearSecBtn = document.querySelector(".clear-sec")
clearSecBtn.addEventListener('click', function(){
    secNum = null;
    displayValue.textContent = null;
})






