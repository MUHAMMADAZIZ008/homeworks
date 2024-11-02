function minMax(arr){
    //1
    let min = Infinity
    let max = 0
    for(item of arr){
        if(item > max){
            max = item
        }
        if(item < min){
            min = item
        }
    }
    return [min, max]
}
console.log(minMax([1, 2, 3, 4, 5]));
console.log(minMax([2334454, 5]));