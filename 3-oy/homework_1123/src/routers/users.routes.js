import { Router } from "express";
import { createUserController, deleteUserController, getAllUserController, getByIdUserController, searchUserController, updateUserController } from "../controllers/index.controller.js";

export const usersRouter = new Router()

usersRouter.post('/', createUserController)
usersRouter.get('/', getAllUserController)
usersRouter.get('/search', searchUserController)
usersRouter.get('/:id', getByIdUserController)
usersRouter.put('/:id', updateUserController)
usersRouter.delete('/:id', deleteUserController)
