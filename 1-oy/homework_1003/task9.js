function objectToArray(obj) {
    let result = []
    for(key in obj){
        result.push([key, obj[key]])
    }
    return result
}

// Test case
const obj = {
    a: 1,
    b: 2,
    c: 3
};
console.log(objectToArray(obj)); 
// Output: [["a", 1], ["b", 2], ["c", 3]]