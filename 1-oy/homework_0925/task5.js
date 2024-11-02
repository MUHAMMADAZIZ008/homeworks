function func(arr) {
    let multiplication = 0
    for (let i = 0; i < arr[0]; i++){
        multiplication += arr[1]
    }
    return multiplication
}
console.log(func([3, 4]));