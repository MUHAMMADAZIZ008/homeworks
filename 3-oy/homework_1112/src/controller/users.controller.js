import { Users } from "../models/authModels.js"

export const createUserController = async(req, res, next) =>{
    try{
        const body = req.body
        const newUser = await Users(body)
        await newUser.save()
        return res.status(200).send({
            message: "created",
            date: newUser._id
        })
    }
    catch(e){
        next(e)
    }
}

export const getAllUsersController = async(req, res, next) =>{
    try{
        const allUsers = await Users.find()
        return res.status(200).send({
            message: "find",
            date: allUsers
        })
    }
    catch(e){
        next(e)
    }
}

export const updateUserByIdController = async(req, res, next) =>{
    try{
        const _id = req.params.id
        const updateUser = await Users.findByIdAndUpdate(_id)
        if(!updateUser){
            return res.status(404).send({
              message: "user not fount"
            })
        }
        return res.status(200).send({
            message: "updated"
        })
    }
    catch(e){
        next(e)
    }
}

export const deleteUserByIdController = async(req, res, next) =>{
    try{
        const _id = req.params.id
        const deleteData = await Users.findByIdAndDelete(_id)
        if(!deleteData){
            return res.status(404).send({
              message: "user not fount"
            })
        }
        return res.status(200).send({
            message: "delete",
            date: deleteData
        })
    }
    catch(e){
        next(e)
    }
}
