let result = document.getElementById('result');

let number1;

let number2;

let operator;

let expression = [];

const clear = document.getElementById('clear');

clear.addEventListener('click', clearAll);

const remainder = document.getElementById('remainder');

remainder.addEventListener('click', enterOperators);

const division = document.getElementById('division');

division.addEventListener('click', enterOperators);

const multiplication = document.getElementById('multiplication');

multiplication.addEventListener('click', enterOperators);

const subtraction = document.getElementById('subtraction');

subtraction.addEventListener('click', enterOperators);

const addition = document.getElementById('addition');

addition.addEventListener('click', enterOperators);

const one = document.getElementById('one');

one.addEventListener('click', enterNumbers);

const two = document.getElementById('two');

two.addEventListener('click', enterNumbers);

const three = document.getElementById('three');

three.addEventListener('click', enterNumbers);

const four = document.getElementById('four');

four.addEventListener('click', enterNumbers);

const five = document.getElementById('five');

five.addEventListener('click', enterNumbers);

const six = document.getElementById('six');

six.addEventListener('click', enterNumbers);

const seven = document.getElementById('seven');

seven.addEventListener('click', enterNumbers);

const eight = document.getElementById('eight');

eight.addEventListener('click', enterNumbers);

const nine = document.getElementById('nine');

nine.addEventListener('click', enterNumbers);

const zero = document.getElementById('zero');

zero.addEventListener('click', enterZero);

const unaryMinus = document.getElementById('unary-minus');

unaryMinus.addEventListener('click', enterNumbers);

const decimal = document.getElementById('decimal');

decimal.addEventListener('click', enterDecimal);

const equalSign = document.getElementById('equals-sign');

equalSign.addEventListener('click', isEqualTo);

window.addEventListener('load', function() {result.value = 0});

function enterNumbers() {

    if (result.value == false && result.value.indexOf('.') == -1) {

        result.value = this.value;

        number1 = result.value;

    } else if (result.value > 0 || result.value.indexOf('.') >= 1 &&
    
    expression[1] == '%' || expression[1] == '/' || expression[1] == '*' || 
    
    expression[1] == '-' || expression[1] == '+') {

        result.value = this.value;

        number2 = this.value;
    
    } else if (result.value > 0 || result.value.indexOf('.') >= 1 && 
    
    number1 > 0 || number1.indexOf('.')) {

        result.value += this.value;

        number1 += this.value;

    } else if (result.value > 0 || result.value.indexOf('.') >= 1 &&
    
    number2 > 0 || number2.indexOf('.')) {

        result.value += this.value;

        number2 += this.value;
    }
}

function clearAll() {

    if (result.value !== 0) {

        result.value = 0;
    }
}

function enterZero() {

    if (result.value == false && result.value.indexOf('.') == -1) {

        result.value = 0;
    
    } else {

        result.value += 0;
    }

    if (result.value > 0 || result.value.indexOf('.') && expression == false) {

        number1 += 0;

    } else if (result.value > 0 || result.value.indexOf('.')) {

        if (expression[1] == '%' || expression[1] == '/' || expression[1] == 
        
        '*' || expression[1] == '-' || expression[1] == '+' && number2 > 0 ||
        
            number2.indexOf('.')) {

            number2 += 0;
        }
    }
}

function enterDecimal() {

    if (result.value >= 0 && result.value.indexOf('%') == -1 && 
    
    result.value.indexOf('/') == -1 && result.value.indexOf('*') == -1 && 
    
    result.value.indexOf('-') == -1 && result.value.indexOf('+') == -1) {

        if (result.value.indexOf('.') == -1){

            result.value += decimal.value;
        }
    
    } else if (result.value.indexOf('%') || result.value.indexOf('/') || 
    
    result.value.indexOf('*') || result.value.indexOf('-') || 
    
    result.value.indexOf('+')) {

        if (number2.value >= 0 && number2.value.indexOf('.') == -1) {

            result.value += decimal.value;
        }
    }

    if (result.value.indexOf('%') == -1 && result.value.indexOf('/') == -1 &&
    
    result.value.indexOf('*') == -1 && result.value.indexOf('-') == -1 &&
    
    result.value.indexOf('+') == -1) {

        number1 += decimal.value;

    } else if (result.value.indexOf('%') || result.value.indexOf('/') ||
    
    result.value.indexOf('*') || result.value.indexOf('-') ||
    
    result.value.indexOf('+') && Number(result.value.slice(-1))) {

        number2 += decimal.value;
    }
}

function enterOperators() {

    if (result.value > 0 || result.value.indexOf('.') > 0) {
    
        if (result.value.slice(-1) !== '.') {

            operator = this.value;
        }
    }
}

function isEqualTo() {

    if (operator == '%') {

        result.value = number1 % number2;

    } else if (operator== '/') {

        result.value = number1 / number2;

    } else if (operator == '*') {

        result.value = number1 * number2;

    } else if (operator == '-') {

        result.value = number1 - number2;

    } else if (operator == '+') {

        result.value = Number(number1) + Number(number2);
    }
}

