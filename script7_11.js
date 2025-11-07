// --------------Closure---------------                                      
                                                        //    function , hoisting , closure , loops , operator , variable

// function outerFunction() {

// let count = 0;
//     function innerFunction() {
//         count++;
//         console.log("Count:", count);
// }
// return innerFunction;
// }

// const result = outerFunction();
// result();
// result();


// --------------Async / await---------------

const url = 'https:fakestoreapi.com/products';
async function fetchApi(){              //  async function to handle asynchronous operations
const data = await fetch('url');       // to fetch data from api
const response = await data.json();    // to convert data into json format
console.log(response);

}

fetchApi();