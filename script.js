// -----------Hoisting -----------//


// var a = 10;
// console.log(a); // 10

// function app(){
//     console.log("hello world");
// }

// app(); // hello world


//--------Math -------------//

let num = 20.4;

// console.log(Math.random()*100); // generates random number between 0 to 100
// console.log(Math.floor(num)); // 20
// console.log(Math.ceil(num)); // 21
// console.log(Math.round(num)); // 20
// console.log(Math.floor(Math.random()*10)); // generates random number between 0 to 10
// console.log(Math.sqrt(16)); // 4
// console.log(Math.pow(2,3)); // 8
// console.log(Math.sign(5));  //  1
// console.log(Math.abs(-5));  // 5
// console.log(Math.trunc(4.9)); // 4



// -----------Date -------------//



// let date = new Date();
// console.log(`0${date.getDate()}-${date.getMonth()}-${date.getFullYear()}[-${date.getHours()}-${date.getMinutes()}
// -${date.getSeconds()}]`); // 06-5-2024

// setTimeout(() => {
//     console.log("This message is shown after 3 seconds");
// }, 3000); // executes after 3 seconds
// setInterval(() => {
//     console.log("This message is shown every 2 seconds");
// }, 2000); // executes every 2 seconds



// -----------Callbacks -------------//

function greet(name,callback){
    console.log("Hello", name);
    callback();
}
function sayGoodbye(){
    console.log("Goodbye!");
}
greet("Rishabh",sayGoodbye);



// -----------Promises -------------//

let promise = new Promise((resolve,reject)=>{
    let condition = true;
    if(condition){
        resolve("M tumse pyaar  karti hu");
    }
    else{
        reject("M tumse pyaar nhi karti hu");
    }
});

promise.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
});