function filterStr(str) {
    let newStr = ""
    let arrStr = str.split(" ")
    for(item of arrStr){
        if(item.length > 3){
            newStr += `${item[0]}${item.length - 2}${item[item.length-1]} `
        }else{
            newStr += item + " "
        }
    }
    return newStr
}

const input = "Every developer likes to mix kubernetes and javascript";
console.log((filterStr(input)));