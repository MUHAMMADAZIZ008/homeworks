//Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
function absNum(nums, k) {
    let len = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i] === nums[j] && Math.abs(i - j) <= k){
                len++
            }
        }
    }
    if(len > nums.length){
        return true
    }
    return false
}
console.log(absNum([1,2,3,1], 3));
console.log(absNum([1,0,1,1], 1));
console.log(absNum([1,2,3,1,2,3], 2));