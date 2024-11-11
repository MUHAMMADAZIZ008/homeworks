import express from "express"
import { authGuard, checkSchema, roleGuard } from "../middlewares/index.js"
import { loginSchema, userSchema } from "../modelsSchema/index.js"
import { createAdminController, loginAuthController, refreshTokenController, registerAuthController } from "../controller/index.js"

export const authRouter = express.Router()


authRouter.post("/admin", checkSchema(userSchema), authGuard, roleGuard(["SuperAdmin"]), createAdminController)
authRouter.post("/register", checkSchema(userSchema), registerAuthController)
authRouter.post("/login", checkSchema(loginSchema), loginAuthController)
authRouter.post("/refreshToken", refreshTokenController)
