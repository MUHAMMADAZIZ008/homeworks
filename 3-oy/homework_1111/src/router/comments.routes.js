import express from "express"
import {commentsSchema} from "../modelsSchema/index.js"
import { authGuard, checkSchema } from "../middlewares/auth.middleware.js"
import { createCommentController, deleteCommentControllerr, getAllCommentControllerr, updateCommentControllerr } from "../controller/index.js"

export const commentsRouter = express.Router()


const accessKey = process.env.ACCESS_SECRET_KEY

commentsRouter.post("/", checkSchema(commentsSchema), authGuard(accessKey), createCommentController)
commentsRouter.get("/", getAllCommentControllerr)
commentsRouter.put("/:id", authGuard(accessKey), updateCommentControllerr)
commentsRouter.delete("/:id", authGuard(accessKey), deleteCommentControllerr)
