let expression = document.getElementById('expression');

let result = document.getElementById('result');

const clearEntry = document.getElementById('clear-entry');

clearEntry.addEventListener('click', clearResultEntry);

const clear = document.getElementById('clear');

clear.addEventListener('click', enterNumbers);

const remainder = document.getElementById('remainder');

remainder.addEventListener('click', enterNumbers);

const division = document.getElementById('division');

division.addEventListener('click', enterNumbers);

const multiplication = document.getElementById('multiplication');

multiplication.addEventListener('click', enterNumbers);

const subtraction = document.getElementById('subtraction');

subtraction.addEventListener('click', enterNumbers);

const addition = document.getElementById('addition');

addition.addEventListener('click', enterNumbers);

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

decimal.addEventListener('click', enterNumbers);

const equalSign = document.getElementById('equals-sign');

equalSign.addEventListener('click', enterNumbers);

function enterNumbers() {

    if (result.value == 0 || result.value == '') {

        result.value = this.value;

    } else if (result.value !== 0 && result.value !== '') {
    
        result.value += this.value;
    }
}

function clearResultEntry() {

    if (result.value !== 0) {

        result.value = 0;
    }
}

function enterZero() {

    if (result.value == false) {

        result.value = 0;
    
    } else {

        result.value += 0;
    }
}

