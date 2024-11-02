/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    // result = String(Number(num1) + Number(num2))
    return String(eval(`${num1} + ${num2}`))
};

let num1 = "11" 
let num2 = "123"
console.log(addStrings(num1, num2));