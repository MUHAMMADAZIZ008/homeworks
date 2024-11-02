function multiply(arr, n) {
    return arr.map((item) => item * n)
}
console.log(multiply([1,2,3], 2));
console.log(multiply([4,5,6], 10));
console.log(multiply([1,2,3], 0));