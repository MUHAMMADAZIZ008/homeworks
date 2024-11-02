/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   let count_s = {}
   for(ch of s){
    if(count_s[ch]){
        count_s[ch]++
    }else{
        count_s[ch] = 1
    }
   }
   for(key in count_s){
    if(count_s[key] === 1){
        return s.indexOf(key)
    }
   }
   return -1
};

s = "leetcode"
// s = "loveleetcode"
// s = "aabb"
console.log(firstUniqChar(s));