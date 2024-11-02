let Mypromis1 = new Promise((resolve, reject) =>{
    if (true){
        resolve("Promis 1")
    }else{
        reject("problem1")
    }

})


let Mypromis2 = new Promise((resolve, reject) =>{
    if (false){
        resolve("Promis 2")
    }else{
        reject("problem2")
    }
})

let Mypromis3 = new Promise((resolve, reject) =>{
    if (true){
        resolve("Promis 3")
    }else{
        reject("problem3")
    }
})

Mypromis1
    .then((res) => console.log(res), Mypromis2
        .then((res) => console.log(res), Mypromis3
            .then((res) => console.log(res))
            .catch((res) => console.log(res))
        )
        .catch((res) => console.log(res))
    )
    .catch((res) => console.log(res))