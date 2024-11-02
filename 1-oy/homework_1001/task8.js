async function myAsync(condition) {
    let promis1 = new Promise((resolve, reject) =>{
        if(condition){
            setTimeout(() =>{
                resolve("hello")
            }, 2000)
        }else{
            setTimeout(() =>{
                reject("afsus")
            }, 2000)
        }
    })

    let result = await promis1
    console.log(result);
}


myAsync(true)