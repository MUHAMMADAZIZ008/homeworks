import express from "express"
import {coursesSchema} from "../modelsSchema/index.js"
import { authGuard, checkSchema, roleGuard } from "../middlewares/auth.middleware.js"
import { createCoursesController, deleteCoursesControllerr, getAllCoursesControllerr, updateCoursesControllerr } from "../controller/index.js"


export const coursesRouter = express.Router()

const accessKey = process.env.ACCESS_SECRET_KEY

coursesRouter.post("/", checkSchema(coursesSchema), authGuard(accessKey), roleGuard(["SuperAdmin", "Admin"]), createCoursesController)
coursesRouter.get("/", getAllCoursesControllerr)
coursesRouter.put("/:id", authGuard(accessKey), roleGuard(["SuperAdmin", "Admin"]), updateCoursesControllerr)
coursesRouter.delete("/:id", authGuard(accessKey), roleGuard(["SuperAdmin", "Admin"]), deleteCoursesControllerr)
