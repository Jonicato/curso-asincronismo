const fnAsync = () => {
    return new Promise((resolve, reject) => {
        //If ternario
        (true) //Condición
            ? setTimeout(() => resolve('Async!!'), 2000) //true
            : reject(new Error('Error')); //false
    });
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');