import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

//Utilizamos el generator para realizar las peticiones a la fake API
async function* iterData (urlApi) { //Con el * diferenciamos las funciones generator del resto
    try {
        const products = await fetchData(`${urlApi}/products`);
        yield console.log(products[16]);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        yield console.log(product.title);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
        yield console.log(category.name);

        console.log('El proceso ha finalizado, revisa si la información devuelta es correcta!');
    } catch (error) {
        console.error(`Ups! Parece que hemos tenido el siguiente error: ${error}`);
    }
}

const res = iterData(API);
res.next();
res.next();
res.next();
res.next();