function sortKeys(obj) {
    let result = []
    let resultObj = {}
    for(key in obj){
        result.push([key, obj[key]])
    }
    result.sort()
    result.map((val) =>{
        resultObj[val[0]] = val[1]
    })
    return resultObj

}


const obj = {
    b: 2,
    a: 1,
    c: 3
};
console.log(sortKeys(obj)); 