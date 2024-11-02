function checkTitle(str){
    let strArr = str.split(" ")
    let check_count = 0
    for (item of strArr){
        if(item[0].charCodeAt(0) >= 65 && item[0].charCodeAt(0) <= 90){
            check_count += 1
        }
    }
    return strArr.length === check_count
}


console.log(checkTitle("A Mind Boggling Achievement"))
console.log(checkTitle("A Simple Java Script Program!"))
console.log(checkTitle("Water is transparent"))