import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//Esta función forma la petición y devuelve el resultado en formato JSON
async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFn = async (urlApi) => {
    try {
        //En esta parte hacemos la petición a todos los datos que necesitamos traer
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        //Imprimimos los resultados de nuestras peticiones
        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch (error) {
        console.error(error);
    }
}

anotherFn(API);