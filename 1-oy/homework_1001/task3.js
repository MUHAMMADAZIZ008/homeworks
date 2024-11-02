let myPromis = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        if(true){
            resolve("Hello, Promises!")
        }else{
            reject("...")
        }
    }, 2000)
})

myPromis
    .then((res) => console.log(res))
    .catch((res) =>console.log(res))
