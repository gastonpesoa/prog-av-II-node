const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
    if (validarCero(b)) {
        return a / b
    }
};

const validarCero = (a) => a !== 0;

module.exports = { sumar, restar, multiplicar, dividir }