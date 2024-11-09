import express from "express"
import { checkSchema } from "../middlewares/index.js"
import { loginSchema, userSchema } from "../modelsSchema/index.js"
import { loginAuthController, registerAuthController } from "../controller/index.js"

export const authRouter = express.Router()


authRouter.post("/register", checkSchema(userSchema), registerAuthController)
authRouter.post("/login", checkSchema(loginSchema), loginAuthController)