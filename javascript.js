// user presses buttons
// buttons change disply and update variables
//at any time a button will update disply and variables, ie
// 0 + 1 will =1
//we need to store data in teh varaibles while moving from first number to 
// operator to second number
// then compute the operation, return the display, and reset teh variables to 
// current disply is first number, second number is blank again

// the calculate function
// should take in first number button presses, operation, then second number
// then update first number to be the solution
// while displaying everything


let firstNumber=""
let secondNumber = 3
let operator;
const displayMainText = document.querySelector('#text');

function add (a, b) {
    return parseInt(a) + parseInt(b);
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
        firstNumber = divide (firstNumber, secondNumber);
        firstNumber = firstNumber.toString();
        updateDisplay(firstNumber);
        } else if (value === "multiply") {
            firstNumber = multiply (firstNumber, secondNumber);
            firstNumber = firstNumber.toString();
            updateDisplay(firstNumber);;
        } else if (value === "subtract") {
            firstNumber = subtract (firstNumber, secondNumber);
            firstNumber = firstNumber.toString();
            updateDisplay(firstNumber);;
        } else if (value === "add") {
            firstNumber = add (firstNumber, secondNumber);
            firstNumber = firstNumber.toString();
            updateDisplay(firstNumber);;
        }
};

function updateDisplay (value) {
    displayMainText.innerHTML = value

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

function clearDisplay () {
    const clear = document.querySelector('#clear');
    clear.addEventListener('click', () => {
        firstNumber = "";
        updateDisplay(0);
        })
};

function backspace () {
    const backspacePress = document.querySelector('#backspace')
    backspacePress.addEventListener('click', () => {
        if (firstNumber.length === 1) {
            shorterString = firstNumber.substring(0, (firstNumber.length - 1));
            firstNumber = shorterString;
            updateDisplay(0);
        } else {
        let shorterString;
        shorterString = firstNumber.substring(0, (firstNumber.length - 1));
        firstNumber = shorterString;
        updateDisplay (firstNumber);
        }
    })
};

function calculate () {
    findNumberPress();
    clearDisplay ();
    backspace();
    identifyOperator ();
    
};
calculate();

