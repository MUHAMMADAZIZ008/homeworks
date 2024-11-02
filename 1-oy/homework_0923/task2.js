function objectToArray(obj) {
    let newArr = []
    for (key in obj){
        newArr.push([key, obj[key]])
    }
    return newArr
}
obj = {
    likes: 2,
    dislikes: 3,
    followers: 10
}
console.log(objectToArray(obj));

