class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}
let mixinGrate = {
    greet(){
        console.log(`hello ${this.name}`);
    },
    depart(){
        console.log(`goodbye ${this.name}`);
    }
}

Object.assign(Person.prototype, mixinGrate)

let user = new Person("Mummmadaziz", 16)
user.greet()
user.depart()