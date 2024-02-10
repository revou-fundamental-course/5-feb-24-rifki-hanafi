function convertTemp() {
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var result;

    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
        result = (inputTemp * 9 / 5) + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
        result = inputTemp + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
        result = (inputTemp - 32) * 5 / 9;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
        result = (inputTemp - 32) * 5 / 9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
        result = inputTemp - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
        result = (inputTemp - 273.15) * 9 / 5 + 32;
    } else {
        result = inputTemp;
    }

    document.getElementById('result').innerText = result.toFixed(2);
}
