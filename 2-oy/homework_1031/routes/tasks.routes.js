import express from "express"
import { tasksMidd } from "../middleware/index.js"
import { createTasksController, deleteTasksByIdController, getAllTasksController, getTasksByIdController, updateTasksByIdController } from "../controller/index.js"

export const tasksRoutes = express.Router()

tasksRoutes.post("/", tasksMidd, createTasksController)
tasksRoutes.get("/", getAllTasksController)
tasksRoutes.get("/:id", getTasksByIdController)
tasksRoutes.put("/:id", updateTasksByIdController)
tasksRoutes.delete("/:id", deleteTasksByIdController)

