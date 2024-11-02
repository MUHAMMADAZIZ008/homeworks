function numInStr(arr) {
    let newArr = []
    for(item of arr){
        for(let i = 0; i < item.length; i++){
            if(!isNaN(Number(item[i])) && item[i] !== " "){
                if(!newArr.includes(item)){
                    newArr.push(item)
                }
            }
        }
    }
    return newArr
}

console.log(numInStr(["1a", "a", "2b", "b"]));