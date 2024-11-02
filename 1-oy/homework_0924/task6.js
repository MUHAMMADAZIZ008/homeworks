function assciNum(item) {
    item = String(item)
    let assciCode = []
    for(let i = 0; i < item.length; i++){
        assciCode.push(item[i].charCodeAt(0))
    }
    return assciCode
}
console.log(assciNum("salom"));