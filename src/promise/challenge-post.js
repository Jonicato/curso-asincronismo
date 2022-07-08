import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'POST', //El tipo de petición a realizar
        mode: 'cors', //Habilitamos los cors
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json' //El tipo de contenido que se le va a enviar
        },
        body: JSON.stringify(data) //Transformamos de JSON a texto plano, que es como lo entiende la fake Api
    });
    return response;
}

//Aquí conformamos el objeto que le mandamos para la inserción de datos
const data = {
    "title": "Babero Platzi",
    "price": 9999,
    "description": "The best clothes for your baby in the EdTech Market",
    "categoryId": 1,
    "images": [
        "https://placeimg.com/640/480/any"
    ]
}

//Enviamos la data a la api correspondiente
postData(`${API}/products`, data)
    .then(response => response.json()) //Devuelve el JSON con la inserción realizada y el id
    .then(data => console.log(data)); //Imprimimos la data