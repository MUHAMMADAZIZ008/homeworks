export function objToArr(obj) {
    let arr = []
    for (let key in obj){
        arr.push([key, obj[key]])
    }
    return arr
}
