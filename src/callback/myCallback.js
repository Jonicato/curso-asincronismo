function greeting(name) {
    console.log(`Hola ${name}`);
}

function sum(num1, num2) {
    return num1 + num2;
}

function res(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
}

greeting('usuario');

setTimeout(() => {
    console.log('El resultado de la suma es: ' + calc(2, 2, sum));
}, 1000);

setTimeout(() => {
    console.log('El resultado de la resta es: ' + calc(6, 2, res));
}, 2000);

setTimeout(() => {
    console.log('El resultado de la multiplicación es: ' + calc(2, 2, mult));
}, 3000);

setTimeout(() => {
    console.log('El resultado de la división es: ' + calc(8, 2, div));
}, 4000);