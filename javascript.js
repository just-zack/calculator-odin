let firstNumber=""
let secondNumber = 3
let operator;
let displayValue;
const displaytext = document.querySelector('#text');

function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a/b;
};

function identifyOperator (operator, firstNumber, secondNumber) {
    const operatorPress = document.querySelectorAll('.operation');
    operatorPress.forEach((button) =>{
        button.addEventListener('click', () => {
           executeOperator(button.id)
        })
        
    })
};

function executeOperator (value) {
    if (value === "divide") {
        updateDisplay(divide (firstNumber, secondNumber));
        } else if (value === "multiply") {
            updateDisplay(multiply (firstNumber, secondNumber));
        } else if (value === "subtract") {
            updateDisplay(subtract (firstNumber, secondNumber));
        } else if (value === "add") {
            updateDisplay(add (firstNumber, secondNumber));
        }
};

function updateDisplay (value) {
    displaytext.innerHTML = value

};

function findNumberPress () {
    const numberPress = document.querySelectorAll('.numberpad');
    numberPress.forEach((button) =>{
        button.addEventListener('click', () => {
            if (button.id === "one") {
            firstNumber += "1"
            } else if (button.id === "two") {
                firstNumber += "2"
            } else if (button.id === "three") {
                firstNumber += "3"
            } else if (button.id === "four") {
                firstNumber += "4"
            } else if (button.id === "five") {
                firstNumber += "5"
            } else if (button.id === "six") {
                firstNumber += "6"
            } else if (button.id === "seven") {
                firstNumber += "7"
            } else if (button.id === "eight") {
                firstNumber += "8"
            } else if (button.id === "nine") {
                firstNumber += "9"
            } else if (button.id === "zero") {
                firstNumber += "0"
            }
            updateDisplay (firstNumber);
        })
        
    })
};

function calculate () {
    findNumberPress();
    
}

findNumberPress();
executeOperator ()