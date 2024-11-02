function rotateArrayLeft(arr, n) {
    while (n) {
        let temp = arr.shift()
        arr.push(temp)
        n--
    }
    return arr
}

console.log(rotateArrayLeft([1, 2, 3, 4, 5], 2)); 