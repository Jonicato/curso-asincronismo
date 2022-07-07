const XMLHTTPRequest = require('xmlhttprequest').XMLHttpRequest; //Permite hacer peticiones hacia la nube
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
    let xhttp = new XMLHTTPRequest();

    xhttp.open('GET', urlApi, true); //Abrimos una conexión
    xhttp.onreadystatechange = function (event) { //Almacena el nombre de la función que se ejecutará cuando el objeto XMLHTTPRequest cambie de estado
        if (xhttp.readyState === 4) { //Validamos que el estado http sea completado
            if(xhttp.status === 200) { //Validamos que el status sea correcto
                callback(null, JSON.parse(xhttp.responseText)); //Parseamos el texto que nos devuelve la petición a formato JSON
            } else {
                const error = new Error('Error' + urlApi); //Se manda el error con la url de la api donde se produjo el error
                return callback(error, null) //Regresamos un null debido a que no devuelve datos
            }
        }
    }
    xhttp.send(); //Se envía la petición al servidor
}

//Se invoca el método fetchData(), con la API concatenada con la cadena de la uri a donde nos vamos a conectar
fetchData(`${API}/products`, function (error1, data1) {
    //Si vay error, se detiene el proceso y se imprime
    if (error1) return console.error(error1);
    //Se invoca de nuevo la función para acceder a un objeto puntual del arreglo inicial data1
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        //Se invoca de nuevo fetchData para obtener la categoría del producto que devolvió el data2
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){ //El ? (optional chaining) sirve
            if (error3) return console.error(error3);
            //Imprime el producto
            console.log(data1[0]);
            //Imprime el título del objeto
            console.log(data2.title);
            //Imprime la categoría
            console.log(data3.name);
        });
    });
});