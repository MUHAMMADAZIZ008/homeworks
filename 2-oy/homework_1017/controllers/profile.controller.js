import { deleteProfile, getUser, updataUser } from "../services/index.js"

export const getProfileController = (req, res, next) => {
    try{
        const id = req.params.id
        let user = getUser(id)
        if(!user){
            return res.status(404).send("Foydalanuvchi topilmadi!")
        }
        return res.status(200).json(user)
    }
    catch(e){

        next(e)
    }
}

export const updateProfile = (req, res, next) => {
    try{
        const id = req.params.id
        const newData = req.body
        let chack = updataUser(id, newData)
        if(!chack){
            return res.status(404).send("Foydalanuvchi topilmadi!")
        }
        return res.status(200).json("Yangilandi")
    }
    catch(e){

        next(e)
    }
}

export const deleteProfileController = (req, res, next) => {
    try{
        const id = req.params.id
        let chack = deleteProfile(id)
        if(!chack){
            return res.status(404).send("Foydalanuvchi topilmadi!")
        }
        return res.status(200).json("O'chirildi")
    }
    catch(e){

        next(e)
    }
}