
async function getInfo(url1, url2) {
    try{
        let res1 = await fetch(url1)
        let res2 = await fetch(url2)

        if(!res1.ok){
            throw new Error("1 - url xato")
        }
        if(!res2.ok){
            throw new Error("2 - url xato")
        }

        const date1 = await res1.json()
        const date2 = await res2.json()
        let arr = []
        let count = 1
        for(let user of date1){
            if(user.userId === date2.id){
                if(count === 1){
                    arr.push({
                        "name" : date2.name, 
                        "city" : date2.address.city,
                        "company" : {
                            "name" : date2.company.name,
                            "catchPhrase" : date2.company.catchPhrase,
                            "bs" : date2.company.bs
                        },
                        "title" : new Array()
                    })
                    count++
                    arr[0]["title"].push(user.title)
                }
            }
        }
        console.log(arr);

    }catch(e){
        console.log(e);
    } 
}




let url1 = "https://jsonplaceholder.typicode.com/posts?userId=1"
let url2 = "https://jsonplaceholder.typicode.com/users/1"
getInfo(url1, url2)