const promise = new Promise(function (resolve, reject){
    
});

const cows = 9;

const countCows = new Promise((resolve, reject)=>{
    if (cows > 10) {
        resolve(`We have ${cows} cows on the darm`)
    }else{
        reject(`There is no cows on the darm`)
    }
})
countCows.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Finally");
})