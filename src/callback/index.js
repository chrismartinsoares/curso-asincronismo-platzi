function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(2,2, sum));


// Esto es un callback tambien
setTimeout(() => {
    console.log("Hola JavaScript");
}, 2000);


// Esto es lo que hace setTimeout
function gretting(name) {
    console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, "Oscar");