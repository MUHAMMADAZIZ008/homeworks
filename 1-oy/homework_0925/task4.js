function findPrimeNumber(arr) {
    return arr.find((item) => item % 2)
}
console.log(findPrimeNumber([4, 12, 42, 9,12, 3]));