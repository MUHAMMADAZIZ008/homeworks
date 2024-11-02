import { readFileSync, writeFile } from "node:fs";
import { join } from "node:path";

let databaseURL = join(import.meta.dirname, "..", "database", "users.json");
export const writeUser = async (userData) => {
    const data = readFileSync(databaseURL, "utf8");
    let users = JSON.parse(data);

    let newUser = {
        id: users.length + 1,
        ...userData,
    };
    users.push(newUser);

    await writeFile(databaseURL, JSON.stringify(users), (err) => {
        if (err) {
            throw new Error(err);
        }
    });
    return true
};

export const loginUserWrite = async (userData) => {
    const data = readFileSync(databaseURL, "utf8");
    let users = JSON.parse(data);
    let chack =  false
    for(let user of users){
        if(user.username === userData.username && user.password === userData.password){
            chack = true
            break
        }
    }
    if(chack){
        users.push(userData);
    
        await writeFile(databaseURL, JSON.stringify(users), (err) => {
            if (err) {
                throw new Error(err);
            }
        });
        return true
    }
    return false
};


export const getUserByUsername = async (username) => {
    const data = readFileSync(databaseURL, "utf8");
    let users = JSON.parse(data);
    for(let user of users){
        if(user.username === username){
            return user
        }
    }
    return false
};

export const updateUser = async (username, body) => {
    const data = readFileSync(databaseURL, "utf8");
    let users = JSON.parse(data);
    for(let i = 0; i < users.length; i++){
        if(users[i].username === username){
            users[i].username = body.username
            users[i].password= body.password
            return true
        }
    }
    return false
};


export const deleteByUsername = async (username, body) => {
    const data = readFileSync(databaseURL, "utf8");
    let users = JSON.parse(data);
    for(let i = 0; i < users.length; i++){
        if(users[i].username === username){
            users.splice(i, 1)
            await writeFile(databaseURL, JSON.stringify(users), (err) => {
                if (err) {
                    throw new Error(err);
                }
            });
            return true
        }
    }
    
    return false
};