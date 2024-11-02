function countAll(str){
    let obj = {
        "HARFLAR" : 0,
        "RAQAMLAR" : 0
    }
    for(ch of str){
        if(!isNaN(Number(ch)) && ch !== " "){
            obj["RAQAMLAR"] += 1
        }else if(ch.toLowerCase() !== ch.toUpperCase()){
            obj["HARFLAR"] += 1
        }
    }
    return obj
}

console.log(countAll("Hello World"));
console.log(countAll("H3ll0 Wor1d"));