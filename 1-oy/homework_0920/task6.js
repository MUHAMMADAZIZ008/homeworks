var canConstruct = function(ransomNote, magazine){
    let temp = ""
    ransomNote = ransomNote.split('').sort().join('')
    for(let i = 0; i < magazine.length; i++){
      temp = magazine.slice(0, i+1)
      temp = temp.split('').sort().join('')
      if(ransomNote === temp){
        return true
      }
    }   
    return false
};


let ransomNote = "a" 
let magazine = "b"

ransomNote = "aa"
magazine = "ab"

ransomNote = "aa"
magazine = "aab"

ransomNote = "aab"
magazine = "baa"
console.log(canConstruct(ransomNote, magazine))