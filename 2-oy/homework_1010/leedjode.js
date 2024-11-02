var filter = function(arr, fn) {
    let result = []
    result = arr.filter((elementn, i)=>fn(elementn, i))
    return result
};
