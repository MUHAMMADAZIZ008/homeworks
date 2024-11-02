let toDo = {}
let command = `
    1. add task\n
    2. show task\n
    3. remove task\n
    4. exit
`

let index = 1
let isTrue = true

let showTask = ""


while (isTrue) {
    alert(command)
    let choiseCommand = prompt("Choise command").toLowerCase()
    switch (choiseCommand) {
        case "add task":
            let newTask = prompt("Enter your task")
            toDo[index] = newTask
            index++
            break;
        case "show task":
            showTask = ""
            for(key in toDo){
                showTask += `
                ${key} : ${toDo[key]}
                `
            }
            if(showTask){
                alert(showTask)
            }else{
                alert("Emtpy")
            }
            break;
        case "remove task":
            alert(showTask)
            let remove = prompt("select the task order number")
            let temp = 0
            for(key in toDo){
                temp++
                if(key === remove){
                    delete toDo[key]
                    alert("deleted successfully")
                    break
                }
            }
            break;
        case "exit":
            let con = confirm("are you sure?")
            if(con){
                isTrue = false
            }
            break;
        default:
            alert("no such command exists")
            break;
    }
}
