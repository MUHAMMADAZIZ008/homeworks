import express from "express"
import { config } from "dotenv"
import { userSchema } from "../modelsSchema/index.js"
import { authGuard, checkSchema, roleGuard } from "../middlewares/auth.middleware.js"
import { createUserController, deleteUserByIdController, getAllUsersController, updateUserByIdController, } from "../controller/index.js"
config()

const accessKey = process.env.ACCESS_SECRET_KEY
const allowedRoles = ["SuperAdmin", "Admin", "Author"]
export const userRouter = express.Router()


userRouter.post("/", checkSchema(userSchema), authGuard(accessKey), roleGuard(allowedRoles), createUserController)
userRouter.get("/", getAllUsersController)
userRouter.put("/:id",authGuard(accessKey), roleGuard(allowedRoles), updateUserByIdController)
userRouter.delete("/:id", authGuard(accessKey), roleGuard(["SuperAdmin"]), deleteUserByIdController)