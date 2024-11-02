import { Router } from "express";
import { createColumn} from "../controllers/index.js";

export const columnsRouter = Router();
columnsRouter.post("/", createColumn);