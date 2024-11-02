import { readUsersDB, writeUsersDB } from "./db.js";
import path from "node:path";



const usersJsonPath = path.join(
    import.meta.dirname,
    "..",
    "database",
    "users.json"
);



export const getUser = (id) => {
    let users = readUsersDB(usersJsonPath)
    for(let user of users){
        if(user.id === id){
            return user
        }
    }
    return false
}


export const updataUser = (id, user) => {
    let users = readUsersDB(usersJsonPath)
    let oldId = ""
    for(let i = 0; i < users.length; i++){
        if(users[i].id === id){
            oldId = users[i].id
            users[i] = {
                ...user,
                id: oldId
            }
            break
        }
    }
    let wirited =  writeUsersDB(usersJsonPath, users)
    if(wirited){
        return true
    }
    return false
}

export const deleteProfile = (id, user) => {
    let users = readUsersDB(usersJsonPath)
    for(let i = 0; i < users.length; i++){
        if(users[i].id === id){
            users.splice(i, 1)
            break
        }
    }
    let wirited =  writeUsersDB(usersJsonPath, users)
    if(wirited){
        return true
    }
    return false
}