function dinamik(condition){
    return new Promise((resolve, reject) =>{
        if(condition){
            resolve("o'hshadi")
        }else{
            reject("afsus")
        }
    })
}

dinamik(true)
    .then((res) => console.log(res))
    .catch((res) => console.log(res))