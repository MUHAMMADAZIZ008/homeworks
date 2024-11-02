//-2-//
var addTwoPromises = async function(promise1, promise2) {
    let a = await promise1
    let b = await promise2
    return await a + b
};

let promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20))
let promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))

console.log(addTwoPromises(promise1, promise2));