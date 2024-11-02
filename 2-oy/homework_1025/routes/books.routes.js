import express from "express"
import { booksMiddlewares } from "../middlewares/index.js"
import { booksController, deleteBooksById, getBooks, getBooksById, updateBooksById } from "../controller/index.js"
export const bookRoutes = express.Router()

bookRoutes.post("/", booksMiddlewares, booksController)
bookRoutes.get("/", getBooks)
bookRoutes.get("/:id", getBooksById)
bookRoutes.put("/:id", updateBooksById)
bookRoutes.delete("/:id", deleteBooksById)