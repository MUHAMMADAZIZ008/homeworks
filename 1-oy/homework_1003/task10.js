function sortKeysByValue(obj) {
    let result = []
    let resultObj = {}
    for(key in obj){
        result.push([key, obj[key]])
    }
    result.sort((a, b) => a[1] - b[1])
    result.map((val) =>{
        resultObj[val[0]] = val[1]
    })
    return resultObj
}

// Test case
const obj = {
    a: 3,
    b: 1,
    c: 2
};
console.log(sortKeysByValue(obj)); 
// Output: { b: 1, c: 2, a: 3 }