let api = "https://api.github.com/users"
class Person{
    constructor(username,  age){
        this.username = username
        this.age = age
    }
}

class Developer extends Person{
    constructor(username, age, job){
        super(username, age)
        this.job = job
    }
}

const mixin = {
    async search(searchaInfo){
        try{
            api += "/" + searchaInfo
            let info = await fetch(api)
                .then(res => res.json())
                .then(res => console.log(res))
            if(JSON.stringify(info) === JSON.stringify({})){
                throw new Error("API bosh!");
            }
            console.log(info);
        }catch(e){
            console.log(e);
        }
    }
}



Object.assign(Person.prototype, mixin)

let user = new Developer("MUHAMMADAZIZ008", 18, "web")
user.search("MUHAMMADAZIZ008")