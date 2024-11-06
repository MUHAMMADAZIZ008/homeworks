import { Users } from "../models/index.js";

export const adminCreateUserCon = async(req, res, next) =>{
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


export const adminGetUsersCon = async(req, res, next) =>{
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

export const adminUpdateUsersCon = async(req, res, next) =>{
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


export const superAdminDeketedUsersCon = async(req, res, next) =>{
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
