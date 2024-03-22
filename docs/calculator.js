let result = '';

function appendNumber(number) {
    result += number;
    updateDisplay();
}

function appendOperator(operator) {
    if (result.length > 0 && !isNaN(parseInt(result[result.length - 1]))) {
        result += operator;
        updateDisplay();
    }
}

function calculateResult() {
    try {
        const calculatedResult = eval(result);
        document.getElementById('result').value = calculatedResult;
        result = calculatedResult.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function clearResult() {
    result = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = result;
}

function calculateFactorial() {
    let num = parseInt(result);
    if (isNaN(num) || num < 0) {
        document.getElementById('result').value = 'Error';
    } else if (num === 0) {
        result = '1';
        document.getElementById('result').value = result;
    } else {
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }
        result = factorial.toString();
        document.getElementById('result').value = result;
    }
}
