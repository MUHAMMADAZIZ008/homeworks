import express from "express"
import { loginMiddlewars } from "../middlewares/index.js"
import { loginController } from "../controller/index.js"

export const loginRoutes = express.Router()
loginRoutes.post('/', loginMiddlewars, loginController)