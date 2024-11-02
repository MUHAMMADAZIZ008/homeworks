let studentsList = {
    "salim" : {
        "fullName" : "salim",
        "studentCourse" : 2,
        "age" : 12
    }
}
let isTrue = true

let command = `
    Select:
        1. create\n
        2. read\n
        3. update\n
        4. delete\n
        5. exit
`

let allUser = ""

while (isTrue) {
    let selectCommsnd = prompt (command)
    switch (selectCommsnd) {
        case "create":
            let fullName = prompt("Enter full name").toLowerCase()
            let userName = prompt("Enter user name").toLowerCase()
            if(!studentsList[userName]){
                studentsList[userName] = {}
            }else{
                alert("Such a username exists!")
                continue
            }
            let studentCourse = +prompt("Enter student course")
            let age = +prompt("Enter student age")

            studentsList[userName] = {
                "fullName" : fullName,
                "studentCourse" : studentCourse,
                "age" : age
            }
            allUser = ""
            for(key in studentsList){
                let student = studentsList[key];
                allUser += `
                    ${key}:
                        Full name: ${student["fullName"]}\n
                        student course: ${student["studentCourse"]}\n
                        age: ${student["age"]}\n
                `
            }
            alert(allUser)
            break;


        case "read":
            let readStudent = prompt("Enter user name").toLowerCase()
            allUser = ""
            for(key in studentsList){
                if(key === readStudent){
                    let student = studentsList[key];
                    allUser += `
                        ${key}:
                            Full name: ${student["fullName"]}\n
                            student course: ${student["studentCourse"]}\n
                            age: ${student["age"]}\n
                    `
                }
            }
            if(allUser){
                alert(allUser)
            }else{
                alert("Emtpy")
            }
            break;
        case "update":
            let updateStudent = prompt("Enter student username")
            let checkStudent = false
            for(key in studentsList){
                if(key === updateStudent){
                    checkStudent = true
                }
            }
            if(!checkStudent){
                alert("no such username exists")
                continue
            }
            let newFullName = prompt("Enter full name").toLowerCase()
            let newUsername = prompt("Enter username").toLowerCase()
            let newCourse = prompt("Enter student course")
            let newAge = prompt("Enter student age")
            delete studentsList[updateStudent]
            studentsList[newUsername] = {}
            studentsList[newUsername] = {
                "fullName" : newFullName,
                "studentCourse" : newCourse,
                "age" : newAge
            }
            alert("changed successfully")
        case "delete":
            let deleteStudent = prompt("Enter student username").toLowerCase()
            let deleteCheck = false
            for(key in studentsList){
                if(key === deleteStudent){
                    deleteCheck  = true
                }
            }
            if(deleteCheck){
                delete studentsList[deleteStudent]
                alert("changed successfully")
            }else{
                alert("Such a student does not exist")
            }
            break;
        case "exit":
            let con = confirm("are you sure?")
            if(con){
                isTrue = false
            }
            break;
        default:
            break;
    }
}