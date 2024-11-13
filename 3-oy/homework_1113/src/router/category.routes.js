import express from "express";
import { categorySchema } from "../modelsSchema/index.js";
import { config } from "dotenv";
import {
  authGuard,
  checkSchema,
  roleGuard,
} from "../middlewares/auth.middleware.js";
import {
  createCategoryContrller,
  deleteByIdCategoryController,
  getAllCategoryController,
  getByCategoryNameController,
  getByPaginationController,
  updateCategoryController,
} from "../controller/index.js";

config();
const accessKey = process.env.ACCESS_SECRET_KEY;
const allowedRoles = ["SuperAdmin", "Admin"];
export const categoryRouter = express.Router();

categoryRouter.post(
  "/",
  checkSchema(categorySchema),
  authGuard(accessKey),
  roleGuard(allowedRoles),
  createCategoryContrller
);
categoryRouter.get("/", getByPaginationController);
categoryRouter.get("/", getAllCategoryController);
categoryRouter.get("/", getByCategoryNameController);
categoryRouter.put(
  "/:id",
  authGuard(accessKey),
  roleGuard(allowedRoles),
  updateCategoryController
);
categoryRouter.delete(
  "/:id",
  authGuard(accessKey),
  roleGuard(["SuperAdmin"]),
  deleteByIdCategoryController
);
