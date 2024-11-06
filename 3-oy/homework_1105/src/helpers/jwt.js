import jwt from "jsonwebtoken"

export const createTokens = (data) =>{
    const toke = jwt.sign(payload, "qwert")
    return toke
}