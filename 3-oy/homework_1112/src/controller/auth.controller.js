import jwt from "jsonwebtoken"

import { createToken } from "../jwt.js"
import { Users } from "../models/authModels.js"
import { config } from "dotenv"
import { otpGenerate, sendMail } from "../helpers/index.js"
import { Otp } from "../models/otp.js"
config()

export const registerAuthController = async(req, res, next) =>{
    try{
        const body = req.body
        if(!body.role){
            body.role = "User"
        }

        const user = await Users.findOne({ email: body.email })
        if (user) {
            return res.status(400).send({
                message: "already exists!"
            })
        }
        //otp -->
        const otp  = otpGenerate()

        const newUser = await Users(body)
        await sendMail(body.email, "OTP", `this is your otp: ${otp}`)

        const newOtp = new Otp({
            user_id: newUser._id,
            otp_code: otp
        })


        await newUser.save()
        await newOtp.save()
        return res.status(200).send({
            message: "otp send to your gmail",
        })
    }
    catch(e){
        next(e)
    }
}

export const verifyOtp = async(req, res, next) =>{
    try {
        const {otp, email} = req.body
        const currentUser = await Users.findOne({email})
        if(!currentUser){
            return res.status(404).send({
                message: "email not found"
            })
        }
        const currentOtp = await Otp.findOne({user_id: currentUser._id})
        const isEqual = currentOtp.verify(otp)
        console.log("++", isEqual);
        
        if(!isEqual){
            return res.status(400).send({
                message: "otp is valid"
            })
        }
        await Otp.deleteOne({user_id: currentUser._id})
        await Users.updateOne(
            {email},
            {
                is_active: true
            }
        )
        return res.status(200).send({
            message: "user is active"
        })
    } catch (error) {
        next(error)
    }
}

export const loginAuthController = async(req, res, next) =>{
    try{
        const {email, password} = req.body
        const findUser = await Users.findOne({email, password})
        console.log(findUser);
        
        if(!findUser){
            return res.send({
                message: "Email or password is wrong"
            })
        }
        if(!findUser.is_active){
            return res.status(400).send({
                message: "user is not active"
            })
        }
        const payload = {
            id: findUser._id,
            email,
            role: findUser.role
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


const generatePassword = (length = 8) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
};


export const forgetPassword = async(req, res, next) =>{
    try {
        const {email} = req.body
        const user = await Users.findOne({email})
        if(!user){
            return res.status(404).send({
                message: "user is not found"
            })
        }
        const newPassword = generatePassword()
        await sendMail(email, "OTP", `this is your password: ${newPassword}`)
        await Users.updateOne(
            {email},
            {password: newPassword}
        )
        return res.status(200).send({
            message: "new password send your gmail"
        })
    } catch (error) {
        next(error)
    }
}