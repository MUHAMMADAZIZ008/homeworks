function odamSoni(person) {
    let chiqdi = 0
    let tushdi = 0
    for(n of person){
        chiqdi += n[0]
        tushdi += n[1]
    }

    return Math.floor(chiqdi - tushdi)
    
}

console.log(odamSoni([
    [10, 0],
    [3, 5],
    [5, 8]
])); // Output: 5

console.log(odamSoni([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8]
])); // Output: 21