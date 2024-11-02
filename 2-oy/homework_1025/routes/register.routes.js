import express from "express"
import { registerMiddleware } from "../middlewares/index.js"
import { registerController } from "../controller/index.js"

export const registerRoutes = express.Router()
registerRoutes.post('/', registerMiddleware, registerController)
