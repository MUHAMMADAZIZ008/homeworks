function uniqueConcat(arr) {
    let text = ""
    arr.map((item =>{
        if(!text.includes(item)){
            text += item
        }
    }))
    return text
}

console.log(uniqueConcat(['a', 'b', 'c', 'a', 'b', 'd', "a"]));