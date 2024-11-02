function lostNum(arr){
    let sum = arr.reduce((acc, num) => acc + num, 0)
    let x = (arr.length * (arr.length + 1)) / 2
    return x - sum
}

console.log(lostNum([0,1,3]));
console.log(lostNum([9,6,4,2,3,5,7,0,1]));