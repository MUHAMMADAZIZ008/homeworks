import { config } from "dotenv"
import jwt from "jsonwebtoken"

config()
const accessKey = process.env.ACCESS_SECRET_KEY
const refreshKey = process.env.REFRESH_SECRET_KEY

const accessTime = process.env.ACCESS_TIME
const refreshTime = process.env.REFREHS_TIME

export const createToken = (payload)=>{
    const accessToken = jwt.sign(payload, accessKey, {expiresIn: accessTime})
    const refreshToken = jwt.sign(payload, refreshKey, {expiresIn: refreshTime})
    return {
        accessToken,
        refreshToken
    }
}