// npm i node-fetch
import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//función que va a recibir como argumento la url que queremos llamar y esto retornará el llamado de fecth: una promesa
function fetchData(urlApi){
    return fetch(urlApi);
};
// //el llamado
// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() => {
//         console.log('hola');
//     }) //se pueden anidar múltiples .then
//     .catch(error => console.log(error));

/*
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        return fetchData(`${API}/products/${products[0].id}`);
    })
    .then(response => response.json())
    .then(product => {
        return fetchData(`${API}/products/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    }) 
*/

fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`);
    })
    .then(response => response.json())
    .then(product => {
        console.log(product);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category);
        console.log(category.name);
    }) 
    .catch(err => console.log(err);)
    