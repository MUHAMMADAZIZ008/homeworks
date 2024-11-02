function countTrue(arr) {
    let count = 0
    for(item of arr){
        if(item){
            count++
        }
    }
    return count
}
console.log(countTrue([true, false, false, true, false]));
