function sum(num1, num2) {
    return num1 + num2;
}

// Podemos ponerle el nombre que preferamos al callback
function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calc(1, 2, sum)); //No es necesario ponerle paréntesis a sum, ya que la estaríamos invocando inmediatamente

setTimeout(() => {
    console.log('Hola JavaScript');
}, 2000);

function greeting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(greeting, 2000, 'Jonathan');