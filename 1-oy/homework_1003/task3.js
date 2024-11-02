function findDuplicates(arr) {
    let newArr = []
    for (num1 of arr){
        if(dublicat(num1)){
            if(!newArr.includes(num1)){
                newArr.push(num1)
            }
        }
    }
    function dublicat(num){
        let count = 0
        for(let num2 of arr){
            if(num === num2){
                count++
            }
        }
        if(count >= 2){
            return true
        }
        return false
    }
    return newArr
}
 
console.log(findDuplicates([1, 2, 3, 1, 2, 4]));