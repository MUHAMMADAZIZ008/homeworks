//Closure function yarating ular butun sonlar (n)(m) qabul qilsin (n > 0, m > 0) shu hola ==n== dan ==m== gacha bo'lgan sonlar ichidagi o'ziga va birga bo'linadigan tub sonlar yi'g'indisini yarating

function sumOfPrime(n, m){
    let sum = 0
    for (let i = n; i <= m; i++){
        if(check_prime(i)){
            sum += i
        }
    }
    
    function check_prime(num){
        for (let i = 2; i < num; i++){
            if (num % i === 0){
                return false
            }
        }
        return true
    }
    return sum
}

console.log(sumOfPrime(1, 10))