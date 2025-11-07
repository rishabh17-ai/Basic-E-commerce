function giveTreat (token){
    return new Promise ( (resolve, reject) => {
        if (token == 3 || token == 5 || token ==8){
            resolve("Here is your treat");
        } else {
            reject("No treat for you!");
        }
    })
};
let randomToken = Math.floor(Math.random() * 10) + 1;

console.log(`Random Token: ${randomToken}`);
giveTreat(randomToken)
  .then(resolve => console.log(resolve))
  .catch(reject => console.log(reject));