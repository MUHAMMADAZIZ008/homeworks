let url = "https://handlers.education.launchcode.org/static/planets.json"

const getInfo = async() =>{
    try{
        let res = await fetch(url)
        if(!res.ok){
            throw new Error("url xato")
        }
        let date = await res.json()
        return await date
    }catch(e){
        return e
    }
}

getInfo()
.then((res) => {
        let fullInfo = []
        for(obj of res){
            fullInfo.push(obj.name)
        }
        console.log(fullInfo)
    }
    )
