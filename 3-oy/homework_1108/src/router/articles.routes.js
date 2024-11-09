import express from "express"
import { articlesSchema } from "../modelsSchema/index.js"
import { authGuard, checkSchema, idCheck, roleGuard } from "../middlewares/index.js"
import { 
    createArticlesController, 
    deleteByIdArticleController, 
    getAllArticlesController, 
    getByArticleTitleController, 
    getByPaginationArticleController,
    updateArticleController, 
} from "../controller/articles.controller.js"


export const articlesRouter = express.Router()

const accessKey = process.env.ACCESS_SECRET_KEY
const allowedRoles = ["SuperAdmin", "Admin", "Author"]

articlesRouter.post("/", checkSchema(articlesSchema), authGuard(accessKey), roleGuard(allowedRoles), idCheck, createArticlesController)
articlesRouter.get("/", getByArticleTitleController)
articlesRouter.get("/", getAllArticlesController)
articlesRouter.get("/", getByPaginationArticleController)
articlesRouter.put("/:id", authGuard(accessKey), roleGuard(allowedRoles), updateArticleController)
articlesRouter.delete("/:id",authGuard(accessKey), roleGuard(["SuperAdmin"]), deleteByIdArticleController)
