import { Router } from "express";
import { createBoardMidd } from "../middlewares/index.js";
import { createBoard, deleteTasks, getAllBoard, getAllTasks, getBoardById, getByIdTasks, removeBoard, tasksCreate, updateBoard, updateTasks } from "../controllers/index.js";
import { boardIdMidd, createTasksMidd} from "../middlewares/tasksMidd.js";
export const boartRouter = Router();

boartRouter.post("/", createBoardMidd, createBoard);
boartRouter.get("/", getAllBoard);
boartRouter.get("/:id", getBoardById);
boartRouter.put("/:id", updateBoard);
boartRouter.delete("/:id", removeBoard);


boartRouter.post("/:boardId/tasks", createTasksMidd, tasksCreate)
boartRouter.get("/:boardId/tasks", boardIdMidd, getAllTasks)
boartRouter.get("/:boardId/tasks/:taskId", boardIdMidd, getByIdTasks)
boartRouter.put("/:boardId/tasks/:taskId", boardIdMidd, updateTasks)
boartRouter.delete("/:boardId/tasks/:taskId", boardIdMidd, deleteTasks)