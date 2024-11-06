import { Users } from "../models/index.js"

import { createTokens } from "../helpers/jwt.js"

export const createUserCon = async(req, res, next) =>{
    try{
        const body = req.body
        body.role = "User"
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

export const checkUserCon = async(req, res, next) =>{
    try{
        const {email, password} = req.body
        const findUser = await Users.find({email, password})
        console.log(findUser);
        
        if(!findUser[0].email || !findUser[0].password){
            return res.send({
                message: "Email or password is wrong"
            })
        }
        const token = createTokens({
            id: findUser._id,
            email: email,
            role: findUser.role
        })
        return res.status(200).send({
            message: "Welcome",
            token: token
        })
    }
    catch(e){
        next(e)
    }
}