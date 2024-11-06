import express from "express"
import { adimCheckMidd, superAdimCheckMidd } from "../middleware/index.js"
import { authSchema } from "../modelsSchema/auth.js"
import { adminCreateUserCon, adminGetUsersCon, adminUpdateUsersCon, superAdminDeketedUsersCon } from "../controller/index.js"
import { config } from "dotenv"
config()

const key = process.env.SECRET_KEY
export const userRouter = express.Router()

userRouter.post("/user", adimCheckMidd(authSchema, key), adminCreateUserCon)
userRouter.get("/user", adimCheckMidd(authSchema, key), adminGetUsersCon)
userRouter.put("/user/:id", adimCheckMidd(authSchema, key), adminUpdateUsersCon)
userRouter.delete("/user/:id", superAdimCheckMidd(key), superAdminDeketedUsersCon)