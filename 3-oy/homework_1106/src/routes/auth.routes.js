import express from "express"
import { authSchema, loginSchema } from "../modelsSchema/index.js"
import { checkDataMidd } from "../middleware/index.js"
import { checkUserCon, createUserCon } from "../controller/index.js"
export const authRouter = express.Router()

authRouter.post("/register", checkDataMidd(authSchema), createUserCon)
authRouter.post("/login", checkDataMidd(loginSchema), checkUserCon)
