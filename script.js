/* Global Variables */
let displayValue = '';
let firstValue = undefined;
let secondValue = undefined;
let operator = undefined;
let answer = undefined;
/* Event Listeners */
let display = document.querySelector('#displayed');

let numButtons = document.querySelectorAll('.numButton');
numButtons.forEach((button => {
    button.addEventListener('click', (e) => {
        if (displayValue == answer) {
            displayValue = '';
            answer = 0;
        } else if (e.target.innerText === '.' && displayValue.includes('.')) {
            return;
        }
        displayValue += `${e.target.innerText}`
        display.textContent = displayValue;
    });
}));

let opButtons = document.querySelectorAll('.operator');
opButtons.forEach((button => {
    button.addEventListener('click', (e) => {
        if (operator != undefined){
            equals();
        } 
        operator = `${e.target.innerText}`;
        firstValue = parseFloat(displayValue);
        displayValue = '';
})
}));

let equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', (e) => {
    if (firstValue === undefined || displayValue === '' || operator === undefined){
        return;
    } else {equals()}

});

let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', clear);

let backButton = document.querySelector('#backspace');
backButton.addEventListener('click', (e) => {
    if (displayValue.length >= 1){
    displayValue = displayValue.substring(0, displayValue.length - 1);
    display.textContent = displayValue;
    }
});

/* Functions */
function add (a, b) {return a+b;};
function subtract (a, b) {return a-b;};
function multiply (a, b) {return a*b;};
function divide (a, b) {return a/b;};

function operate (a,oper,b){
    if (oper === '+') {return add(a,b)};
    if (oper === '-') {return subtract(a,b)};
    if (oper === '*') {return multiply(a,b)};
    if (oper === '/') {return divide(a,b)};
}

function equals (e) {
    secondValue = parseFloat(displayValue);
    answer = Math.round(operate(firstValue, operator, secondValue) * 100000)/100000;
    display.innerText = answer;
    displayValue = `${answer}`;
    firstValue = answer;
    secondValue = undefined;
    operator = undefined;
};

function clear (e) {
    firstValue = undefined;
    secondValue = undefined;
    operator = undefined;
    displayValue = '';
    display.innerText = '';
};

/* Keypress Support */
document.addEventListener('keydown', (e) => {
    console.log(e.key);
        if (e.key.replace(/[^0-9]/g,'').length > 0){
            document.getElementById(`b${e.key}`).click();
        } else if (e.key === '.') {
            document.getElementById('decimal').click();
        } else if (e.key === '*') {
            document.getElementById('multiply').click()
        } else if (e.key === '/') {
                document.getElementById('divide').click()
        } else if (e.key === '+') {
                document.getElementById('add').click()
        } else if (e.key === '-') {
                document.getElementById('subtract').click()
        } else if (e.key === '=' || e.key === 'Enter') {
                document.getElementById('equals').click()
        } else if (e.key === 'Backspace') {
                document.getElementById('backspace').click()
        } else if (e.key === 'c' || e.key === ' ') {
                document.getElementById('clear').click()
        }
})




/* Execute */