function removeDigits(str) {
    let newStr = ""
    for(ch of str){
        if(isNaN(Number(ch))){
            newStr += ch
        }
    }
    return newStr
}

console.log(removeDigits("abc123def456"));