import { getUserByUsername, loginUserWrite, updateUser, writeUser } from "../services/user.services.js"

export const createUser = async (req, res, next) => {
    try {
        let body = req.body;

        let getUser = await writeUser(body);

        if (!getUser){
            return res.status(500).send("Saqlashdagi muammo");
        } 
        return res.status(200).send("Saqlandi");
    } catch (e) {
        return next(e);
    }
};

export const loginUser = async (req, res, next) => {
    try {
        let body = req.body;

        let getUser = await loginUserWrite(body);

        if (!getUser){
            return res.status(500).send("Password yoki username xato");
        } 
        return res.status(200).send("Login");
    } catch (e) {
        return next(e);
    }
};

export const getProfile = async (req, res, next) => {
    try {
        let username = req.params.username;
        let user = getUserByUsername(username)
        if(user){
            return res.status(200).josn(user)
        }else{
            return res.status(404).send("bunday profile yo'q")
        }
        
    } catch (e) {
        return next(e);
    }
};

export const updateProfile = async (req, res, next) => {
    try {
        let username = req.params.username;
        let body = req.body
        let chacked = updateUser(username, body)
        if(chacked){
            return res.status(200).send("Yangilandi")
        }else{
            return res.status(404).send("bunday profile yo'q")
        }
        
    } catch (e) {
        return next(e);
    }
};

export const deleteProfile = async (req, res, next) => {
    try {
        let username = req.params.username;
        let chacked = deleteByUsername(username)
        if(chacked){
            return res.status(200).send("O'chirildi")
        }else{
            return res.status(404).send("bunday profile yo'q")
        }
        
    } catch (e) {
        return next(e);
    }
};