export function arrToObj(arr){
    let obj = {}
    for(item of arr){
        obj[item[0]] = item.split(1)
    }
    return obj
}


