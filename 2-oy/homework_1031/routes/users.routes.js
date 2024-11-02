import express from "express"
import { usersMidd } from "../middleware/index.js"
import { deleteUserController, getAllusersController, getUsersByIdController, updateUserController, usersController } from "../controller/index.js"

export const usersRoutes = express.Router()

usersRoutes.post("/", usersMidd, usersController)
usersRoutes.get("/", getAllusersController)
usersRoutes.get("/:id", getUsersByIdController)
usersRoutes.put("/:id", updateUserController)
usersRoutes.delete("/:id", deleteUserController)
