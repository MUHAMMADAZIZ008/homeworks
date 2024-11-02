class todoList{
    constructor (){
        this.tasks = new Array()
    }
    addTask(item){
        this.tasks.push(item)
    }
    revomeTask(index){
        delete this.tasks[index-1]
    }
    displayTask(){
        let task = ""
        for(let i = 0; i < this.tasks.length; i++){
            if(this.tasks[i] !== undefined){
                task +=`${i+1}: ${this.tasks[i]}\n`
            }
        }
        console.log(task);
    }
}
let user1 = new todoList()
user1.addTask("Breakfast at 8:00 AM")
user1.addTask("reading book at 9:00 AM")
user1.addTask("fitnes at 9:00 PM")

user1.displayTask()

user1.revomeTask(3)

user1.displayTask()

