function squareNumber(n){
    let newNum = ""
    n = String(n)
    for(ch of n){
        newNum += String(Number(ch) ** 2)
    }
    return +newNum
}

console.log((squareNumber(3221)));
console.log((squareNumber(3219)));