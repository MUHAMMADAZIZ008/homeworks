import path from "path"
import { readUsersDB, writeUsersDB } from "./db.js";
const debtJsonPath = path.join(
    import.meta.dirname,
    "..",
    "database",
    "debt.json"
);


const loginJsonPath = path.join(
    import.meta.dirname,
    "..",
    "database",
    "login.json"
);

export const getDebt = () => {
    return readUsersDB(debtJsonPath)
}


export const checkUser = (newUser) => {
    let users =  readUsersDB(loginJsonPath)
    for(let user of users){
        if(user.email === newUser.email && user.password === newUser.password){
            return user
        }
    }
    return false
}



export const createDebt = (newDebt, user) => {
    let debts = readUsersDB(debtJsonPath)
    let debt = {}
    for(let key in newDebt){
        if(key !== "email" && key !== "password"){
            debt[key] = newDebt[key]
        }
    }
    debts.push({
        userId : user.id,
        ...debt,
        startTime : Date.now()
    })
    let chack = writeUsersDB(debtJsonPath, debts)

    if(chack){
        return true
    }
    return false

}




export const updataDabt = (id, newData) => {
    let debts = readUsersDB(debtJsonPath)
    let oldId = ""
    for(let i = 0; i < debts.length; i++){
        if(debts[i].userId === id){
            oldId = debts[i].id
            users[i] = {
                userId: oldId,
                ...newData
            }
            break
        }
    }
    let wirited =  writeUsersDB(debtJsonPath, debts)
    if(wirited){
        return true
    }
    return false
}


export const getDebtById = (id) => {
    let debts = readUsersDB(debtJsonPath)
    for(let i = 0; i < debts.length; i++){
        if(debts[i].userId === id){
            return debts[i]
        }
    }
    return false
}

export const deleteDebtById = (id) => {
    let debts = readUsersDB(debtJsonPath)
    for(let i = 0; i < debts.length; i++){
        if(debts[i].userId === id){
            debts.splice(i, 1)
            break
        }
    }
    let wirited =  writeUsersDB(debtJsonPath, debts)
    if(wirited){
        return true
    }
    return false
}
