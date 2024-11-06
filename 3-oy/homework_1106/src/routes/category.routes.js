import express from "express"
import { categorySchema } from "../modelsSchema/index.js"
import { categoryCreateCon, deleteByIdCreateCon, getAllCreateCon, getByIdCreateCon, getByNameCreateCon, getByPaginationCon, updateByIdCreateCon } from "../controller/index.js"
import { config } from "dotenv"
import { adimCheckMidd, superAdimCheckMidd } from "../middleware/index.js"

config()

const key = process.env.SECRET_KEY

export const categoryRouter = express.Router()

categoryRouter.post("/", adimCheckMidd(categorySchema, key), categoryCreateCon)
categoryRouter.get("/", getByPaginationCon)
categoryRouter.get("/:id", getByIdCreateCon)
categoryRouter.get("/", getByNameCreateCon)
categoryRouter.get("/", getAllCreateCon)
categoryRouter.put("/:id", adimCheckMidd(categorySchema,key), updateByIdCreateCon)
categoryRouter.delete("/:id", superAdimCheckMidd(key), deleteByIdCreateCon)
