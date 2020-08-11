let expression = document.getElementById('expression');

let result = document.getElementById('result');

const clearEntry = document.getElementById('clear-entry');

clearEntry.addEventListener('click', clearResultEntry);

const clear = document.getElementById('clear');

clear.addEventListener('click', clearAll);

const remainder = document.getElementById('remainder');

remainder.addEventListener('click', operators);

const division = document.getElementById('division');

division.addEventListener('click', operators);

const multiplication = document.getElementById('multiplication');

multiplication.addEventListener('click', operators);

const subtraction = document.getElementById('subtraction');

subtraction.addEventListener('click', operators);

const addition = document.getElementById('addition');

addition.addEventListener('click', operators);

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

equalSign.addEventListener('click', enterNumbers);

function enterNumbers() {

    if (result.value == false && result.value.indexOf('.') == -1) {

        result.value = this.value;

    } else if (result.value >= 0 && result.value.indexOf('.') >= 1) {

        result.value += this.value;

    } else if (expression.value.substr(-1) == '%' || 
    
    expression.value.substr(-1) == '/' || expression.value.substr(-1) == '*' ||
    
    expression.value.substr(-1) == '-' || expression.value.substr(-1) == '+') {
        
        result.value = this.value;
    
    } else {
    
        result.value += this.value;
    }
}

function clearResultEntry() {

    if (result.value !== 0) {

        result.value = 0;
    }
}

function clearAll() {

    if (result.value !== 0 && expression.value !== 0) {

        result.value = 0;

        expression.value = 0;
    }
}

function enterZero() {

    if (result.value == false && result.value.indexOf('.') == -1) {

        result.value = 0;
    
    } else {

        result.value += 0;
    }
}

function enterDecimal() {

    if (result.value !== '' && result.value.indexOf('.') == -1) {

        result.value += decimal.value;
    }
}

function operators() {

    if (result.value > 0 || result.value.indexOf('.') > 0 && 
    
    result.value.slice(-1) !== '.' && expression.value.indexOf('%') == -1 &&
    
    expression.value.indexOf('/') == -1 && expression.value.indexOf('*') == -1 &&
    
    expression.value.indexOf('+') == -1 && expression.value.indexOf('-') == -1) {

        expression.value = result.value + this.value;

    } else if (expression.value.indexOf('%') > 0 || 
    
    expression.value.indexOf('/') > 0 || expression.value.indexOf('*') > 0 || 
    
    expression.value.indexOf('-') > 0 || expression.value.indexOf('+') > 0) {

        expression.value += result.value + this.value;

    } else if (result.value.substr(-1) == '.' && expression.value == '') {

        expression.value = result.value.slice(0, -1) + this.value;

    } else if (result.value.substr(-1) == '.' && expression.value >= 0) {

        expression.value += result.value.slice(0, -1) + this.value;
    }
}

