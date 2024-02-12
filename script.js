function hitung() {
    var celsius = parseFloat(document.getElementById('celsius').value);
    var fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    var kelvin = parseFloat(document.getElementById('kelvin').value);
    var reamur = parseFloat(document.getElementById('reamur').value);
    var result = document.getElementById('result');

    if (!isNaN(celsius)) {
        result.innerHTML = celsius + " °C = " + ((celsius * 9/5) + 32) + " °F, " +
                                      (celsius + 273.15) + " K, " +
                                      (4/5 * celsius) + " °Ré";
    } else if (!isNaN(fahrenheit)) {
        result.innerHTML = fahrenheit + " °F = " + ((fahrenheit - 32) * 5/9) + " °C, " +
                                          ((fahrenheit - 32) * 5/9 + 273.15) + " K, " +
                                          (4/9 * (fahrenheit - 32)) + " °Ré";
    } else if (!isNaN(kelvin)) {
        result.innerHTML = kelvin + " K = " + (kelvin - 273.15) + " °C, " +
                                    ((kelvin - 273.15) * 9/5 + 32) + " °F, " +
                                    ((kelvin - 273.15) * 4/5) + " °Ré";
    } else if (!isNaN(reamur)) {
        result.innerHTML = reamur + " °Ré = " + (5/4 * reamur) + " °C, " +
                                       ((9/4 * reamur) + 32) + " °F, " +
                                       ((5/4 * reamur) + 273.15) + " K";
    } else {
        result.innerHTML = "Masukkan nilai suhu yang valid.";
    }
}