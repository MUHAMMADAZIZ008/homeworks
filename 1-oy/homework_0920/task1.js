//Closure function yarating u butun sonlar (n)(m) qabul qilsin (n > 0, m > 0). 1 dan ==n== gacha bo'lgan sonlarning ==m== chi darajasidagi sonlar yig'indisini hisoblang!
function sumScuare(n, m){
    let sum = 0
    for (let i = 1; i <= n; i++){
        sum += i ** m
    }
    return sum
}
console.log(sumScuare(2, 2))