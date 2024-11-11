import jwt from "jsonwebtoken"

import { createToken } from "../jwt.js"
import { Users } from "../models/authModels.js"
import { config } from "dotenv"
config()

export const registerAuthController = async(req, res, next) =>{
    try{
        const body = req.body
        if(!body.role){
            body.role = "User"
        }
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

export const loginAuthController = async(req, res, next) =>{
    try{
        const {email, password} = req.body
        const findUser = await Users.find({email, password})
        console.log(findUser);
        
        if(!findUser[0].email || !findUser[0].password){
            return res.send({
                message: "Email or password is wrong"
            })
        }
        
        const payload = {
            id: findUser[0]._id,
            email,
            role: findUser[0].role
        }
        
        const tokens = createToken(payload)
        return res.status(200).send({
            message: "Welcome",
            token: tokens
        })
    }
    catch(e){
        next(e)
    }
}


export const createAdminController = async(req, res, next) =>{
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
export const refreshTokenController = (req, res, next) =>{
    try {
        const refreshKey = process.env.REFRESH_SECRET_KEY
        const accessKey = process.env.ACCESS_SECRET_KEY
        const accessTime = process.env.ACCESS_TIME
        const {token} = req.body
        let payload = {}
        jwt.verify(token, refreshKey, (err, data) =>{
            if(err){
                throw new Error(err)
            }
            payload = {
                id: data.id,
                email: data.email,
                role: data.role
            }
        })
        const accessToken = jwt.sign(payload, accessKey, {expiresIn: accessTime})

        return res.status(201).send({
            accessToken, 
            refreshToken: token
        })
    } catch (error) {
        next(error)
    }
}