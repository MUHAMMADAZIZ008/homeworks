import { Router } from "express";
import {
  getAllData,
  searchData,
  getById,
  updateData,
  removeData,
} from "../controllers/index.js";
export const usersRouter = Router();

usersRouter.get("/", getAllData);
usersRouter.get("/search", searchData);
usersRouter.get("/:id", getById);
usersRouter.put("/:id", updateData);
usersRouter.delete("/:id", removeData);

