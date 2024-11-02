// Closure function yarating ular string typedagi ma'lumot qabul qilsin (str1)(str2) qabul qilsin m va n dagi harflar bir biroda bormi shuni hisoblaydigan dastur tuzing

function isEqual(str1, str2){
    if (str1.length != str2.length){
        return false
    }
    let temp = 0
    for(ch of str1){
        if(isTrue(ch)){
            temp += 1
        }

    }
    function isTrue(char){
        for (ch of str2){
            if (char === ch){
                return true
            }
        }
        return false
    }
    if (temp === str1.length){
        return true
    } 
    return false
}
console.log(isEqual("abc", "bac"))
console.log(isEqual("apple", "elppa"))
console.log(isEqual("abcde", "abode"))
