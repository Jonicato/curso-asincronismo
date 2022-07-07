const promise = new Promise(function (resolve, reject) {
    resolve('Hey!');
});

const cows = 15;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`Nice! We have ${cows} cows on the farm`);
    } else {
        reject('There is no enough cows on the farm :(')
    }
});

promise.then((result) => {
    console.log(result)
}),
countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
}).finally(() => {
    console.log('Finally!');
});