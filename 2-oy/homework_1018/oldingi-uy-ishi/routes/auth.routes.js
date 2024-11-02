import express from "express";
import { loginController, logoutController, registerController } from '../controllers/index.js';
import { registerMiddleware, loginMiddlewars} from "../middleware/index.js";

export const authRouter = express.Router()


authRouter.post("/register", registerMiddleware, registerController)
authRouter.post("/login", loginMiddlewars, loginController)
authRouter.post("/logout", logoutController)
