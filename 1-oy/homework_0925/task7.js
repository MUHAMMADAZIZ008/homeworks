function formatPhoneNumber(arr) {
    let formatStr = ""
    arr.splice(0, 0, "(")
    arr.splice(4, 0, ")")
    arr.splice(5, 0, " ")
    arr.splice(9, 0, "-")
    for(item of arr){
        formatStr += item
    }
    return formatStr
}
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
Array().splice()