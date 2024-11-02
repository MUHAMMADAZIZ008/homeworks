function numberSplit(num){
    let first = Math.floor(num / 2)
    let newArr = new Array(first, num - first)
    return newArr
}
console.log(numberSplit(10));
console.log(numberSplit(7));
console.log(numberSplit(-9));
console.log(numberSplit(11));