import express from "express";
import { createDebtController, deleteDebtController, getAllDebt, getDebtByIdController, getPagination, getSearch, updataDebtController } from "../controllers/index.js";
import { createDebtMiddleware } from "../middleware/index.js";
import { updataUser } from "../services/profile.js";

export const debtRouter = express.Router()


debtRouter.get("/", getSearch)
debtRouter.get("/", getPagination)
debtRouter.get("/", getAllDebt)
debtRouter.post("/", createDebtMiddleware, createDebtController)
debtRouter.get("/:id", getDebtByIdController)
debtRouter.put("/:id", updataDebtController)
