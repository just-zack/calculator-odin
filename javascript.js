let firstNumber= []
let secondNumber;
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

function operate (operator, firstNumber, secondNumber) {
    
};

function updateDisplay (value) {
    displaytext.innerHTML = value

};

function findNumberPress () {
    const numberPress = document.querySelectorAll('.numberpad');
    numberPress.forEach((button) =>{
        button.addEventListener('click', () => {
            if (button.id === "one") {
            firstNumber.push(1)
            } else if (button.id === "two") {
                firstNumber.push(2)
            } else if (button.id === "three") {
                firstNumber.push(3)
            } else if (button.id === "four") {
                firstNumber.push(4)
            } else if (button.id === "five") {
                firstNumber.push(5)
            } else if (button.id === "six") {
                firstNumber.push(6)
            } else if (button.id === "seven") {
                firstNumber.push(7)
            } else if (button.id === "eight") {
                firstNumber.push(8)
            } else if (button.id === "nine") {
                firstNumber.push(9)
            } else if (button.id === "zero") {
                firstNumber.push(0)
            }
            let firstNumberToString = firstNumber.toString("");
            updateDisplay (firstNumberToString);
        })
        
    })
};

function convertNumberIdToNumber () {

}
findNumberPress()