import express from "express"
import { checkDataMidd } from "../middleware/index.js"
import { categorySchema } from "../modelsSchema/index.js"
import { categoryCreateCon, deleteByIdCreateCon, getAllCreateCon, getByIdCreateCon, getByNameCreateCon, getByPaginationCon, updateByIdCreateCon } from "../controller/index.js"

export const categoryRouter = express.Router()

categoryRouter.post("/", checkDataMidd(categorySchema), categoryCreateCon)
categoryRouter.get("/", getByPaginationCon)
categoryRouter.get("/:id", getByIdCreateCon)
categoryRouter.get("/", getByNameCreateCon)
categoryRouter.get("/", getAllCreateCon)
categoryRouter.put("/:id", updateByIdCreateCon)
categoryRouter.delete("/:id", deleteByIdCreateCon)
