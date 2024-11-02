import express from "express"
import { commentsMiddleware } from "../middlewares/index.js"
import { createComments, getAllComments } from "../controller/comments.controller.js"
export const commentsRoutes = express.Router()

commentsRoutes.post("/:id", commentsMiddleware, createComments)
commentsRoutes.get("/", getAllComments)
