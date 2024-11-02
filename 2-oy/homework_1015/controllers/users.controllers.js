import fs from "fs"
import path from "path"
let jsonPath = path.join(process.cwd(), "./database/users.json")
let getAllUsers = (req, res) => {
    fs.readFile(jsonPath, "utf-8", (err, data) => {
        if (err) {
            throw new Error(err)
        }
        const users = JSON.parse(data)
        res.json(users)
    })
}


let getUserById = (req, res) => {
    let id = req.prames.id
    fs.readFile(jsonPath, "utf-8", (err, data) => {
        if (err) {
            throw new Error(err)
        }
        let users = JSON.parse(data)
        let user = users.find(u => u.id === +id)
        if (user) {
             res.json(user)
        }else{
            res.status(404).send("Foydalanuvchi topilmadi")
           
        }
    })
}

let creadUser = (req, res) => {
    let body = req.body
    fs.readFile(jsonPath, "utf-8", (err, data) => {
        if (err) {
            throw new Error(err)
        }
        let users = JSON.parse(data)
        let newUser = {
            id: users.length + 1,
            ...body
        }
        users.push(newUser)
        fs.writeFile(jsonPath, JSON.stringify(users), (err) => {
            if (err) {
                throw new Error(err)
            }
            res.status(201).send(newUser)
        })
    })
}

let updateUser = (req, res) => {
    let id = req.params.id; 
    let body = req.body;

    fs.readFile(jsonPath, "utf-8", (err, data) => {
        if (err) {
            throw new Error(err);
        }

        let usres = JSON.parse(data);
        let check = false; 

        for (let i = 0; i < usres.length; i++) {
            if (usres[i].id === +id) {
                check = true;
                usres[i] = {
                    id: usres[i].id,
                    ...body
                };
                break;
            }
        }

        if (check) {
            fs.writeFile(jsonPath, JSON.stringify(usres, null, 2), (err) => {
                if (err) {
                    return res.status(500).send("Yangilashda muammo");
                }
                res.status(200).send("Yangilandi");
            });
        } else {
            res.status(404).send("Foydalanuvchi topilmadi");
        }
    });
};




let deleteUser = (req, res) => {
    let id = req.params.id
    fs.readFile(jsonPath, "utf-8", (err, data) => {
        if (err) {
            throw new Error(err)
        }
        let usres = JSON.parse(data)
        let check = false
        for (let i = 0; i < usres.length; i++) {
            if (usres[i].id === +id) {
                check = true
                usres.splice(i, 1)
                break
            }
        }

        if(check){
            fs.writeFile(jsonPath, JSON.stringify(usres, null, 2), (err) => {
                if (err) {
                    return res.status(500).send("O'chirishda muammo");
                }
                res.status(200).send("O'chirildi");
            });
        } else{
            res.status(404).send("Foydalanuvchi topilmadi")
        }
    })
}

export default {
    getAllUsers,
    getUserById,
    creadUser,
    updateUser,
    deleteUser
}