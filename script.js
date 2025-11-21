let firstNumber = "";
let secondNumber = "";
let currentOperator = "";
let shouldResetScreen = false;

const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.operand');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('#equals');
const clearButton = document.querySelector('#clear');

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
	if (shouldResetScreen) {
		display.textContent = button.textContent;
		shouldResetScreen = false;
	}
	else {
    if (display.textContent === "0") {
		display.textContent = button.textContent;
	}
	else {
		display.textContent += button.textContent;
	}
	}
    displayValue = display.textContent;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    firstNumber = display.textContent;
    currentOperator = button.textContent;
	display.textContent = "";
  });
});

equalsButton.addEventListener('click', () => {
    secondNumber = display.textContent;
    display.textContent = operate(currentOperator, firstNumber, secondNumber);
	shouldResetScreen = true;
});

clearButton.addEventListener('click', () => {
    display.textContent = "0";
	firstNumber = "";
    secondNumber = "";
    currentOperator = null;
});

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
	if (b === 0) {
		return "LOL"
	}
	else {
	return a / b;
	}
}

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    if (operator === "+") {
        return add(a, b);
    }
	else if (operator === "-") {
		return subtract(a, b);
	}
	else if (operator === "*") {
		return multiply(a, b);
	}
	else if (operator === "/") {
		return divide(a, b);
	}
}