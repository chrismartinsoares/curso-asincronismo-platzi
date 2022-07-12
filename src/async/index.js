// const fnAsync = () =>{
//     return new Promise((resolve, reject)=>{
//         (true) 
//         ? setTimeout(() => resolve('Async!!'), 2000) 
//         : reject(new Error('Error!'))
//     });
// }

function fnAsync () {
    return new Promise((resolve, reject)=>{
        (true) 
        ? setTimeout(() => resolve('Async!!'), 2000) 
        : reject(new Error('Error!'))
    });
}

// Esto es un try and catch para ver la diferencia con el asyc/await
// que es prectimenta lo mismo
const try_catch = fnAsync().then((resolve) => console.log(resolve))

const async_await = async () => {
    const something = await fnAsync();
    console.log(something);
    //console.log('Hola!');
}

console.log('Before');
async_await();
console.log('After');

