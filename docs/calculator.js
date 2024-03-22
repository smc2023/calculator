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
        let calculatedResult;
        if (result.includes('!')) {
            // Calculate factorial
            const num = parseInt(result.slice(0, -1));
            calculatedResult = factorial(num);
        } else {
            calculatedResult = eval(result);
        }
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

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
