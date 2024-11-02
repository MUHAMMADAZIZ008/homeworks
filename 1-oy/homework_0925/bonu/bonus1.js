function prime(arr) {
    let primeArr = []
    for(item of arr){
        if(isPrime(item)){
            primeArr.push(item)
        }
    }
    function isPrime(item){
        let count = 0
        for(let i = 1; i < item; i++){
            if(item % i === 0){
                count++
            }
        }
        if(count < 2){
            return true
        }
        return false
    }

    return primeArr
}
console.log(prime([1,2,3,4,8,5,7,6,556,54]));