let firstNumber="";
let transitNumber;
let calculation;
let operator;
let secondNumber = "";
const displayMainText = document.querySelector('#text');
const displaySubText = document.querySelector('#subText');

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
    if (b === ""){
        return "undefined";
    } return a/b;
};

function identifyOperator () {
    const operatorPress = document.querySelectorAll('.operation');
    operatorPress.forEach((button) =>{
        button.addEventListener('click', () => {
            storeFirstNumber();
            operator = button.id;
            if (operator === "divide") {
                calculation = transitNumber + " /"
            } else if (operator === "multiply") {
                calculation = transitNumber + " x"
            } else if (operator === "subtract") {
                calculation = transitNumber + " -"
            } else if (operator === "add") {
                calculation = transitNumber + " +"
            }
            updateSubDisplay(calculation);
            updateDisplay (firstNumber);
        })
    })
};

function executeOperator () {
    if (operator === "divide") {
        if (firstNumber === "0") {
            secondNumber = "undefined"
        } else { secondNumber = divide (transitNumber, firstNumber);
            calculation = transitNumber + " / " + firstNumber + " =";
            secondNumber = secondNumber.toString();
        }
    } else if (operator === "multiply") {
        secondNumber = multiply (transitNumber, firstNumber);
        calculation = transitNumber + " x " + firstNumber + " =";
        secondNumber = secondNumber.toString();
    } else if (operator === "subtract") {
        secondNumber = subtract (transitNumber, firstNumber);
        calculation = transitNumber + " - " + firstNumber + " =";
        secondNumber = secondNumber.toString();
    } else if (operator === "add") {
        secondNumber = add (transitNumber, firstNumber);
        calculation = transitNumber + " + " + firstNumber + " =";
        secondNumber = secondNumber.toString();
    }
        updateSubDisplay(calculation);
        updateDisplay(secondNumber);
};

function executeEqual () {
    const equalPress = document.querySelector('#equal');
    equalPress.addEventListener('click', () => {
        executeOperator();
        if (secondNumber === "undefined") {
            secondNumber = ""
        };
        firstNumber = secondNumber;
        secondNumber ="";
    })
}

function storeFirstNumber () {
    transitNumber = firstNumber;
    firstNumber = "";
}

function updateDisplay (value) {
    displayMainText.innerHTML = value
};

function updateSubDisplay (value) {
    displaySubText.innerHTML = value;
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
        updateSubDisplay("");
        })
};

function backspace () {
    const backspacePress = document.querySelector('#backspace')
    backspacePress.addEventListener('click', () => {
        if (firstNumber.length === 1) {
            firstNumber = "0"
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
    clearDisplay ();
    backspace();
    identifyOperator ();
    findNumberPress();
    executeEqual();
    
};
calculate();

