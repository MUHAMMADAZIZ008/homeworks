import jwt from "jsonwebtoken"
import { config } from "dotenv"
config()

const key = process.env.SECRET_KEY

export const createTokens = (data) =>{
    const toke = jwt.sign(data, key)
    return toke
}