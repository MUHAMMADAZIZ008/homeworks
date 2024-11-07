import { createToken } from "../jwt.js"
import { Users } from "../models/authModels.js"

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
