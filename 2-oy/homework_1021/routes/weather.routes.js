import express from "express"
import { weatherMiddlewares } from "../middlewares/index.js"
import { deleteWeather, getById, getPegination, getSearch, updateWeather, weatherController } from "../controller/weather.controller.js"

export const weatherRouts = express.Router()

weatherRouts.post("/", weatherMiddlewares, weatherController)
weatherRouts.get("/:id", getById)
weatherRouts.get("/", getPegination)
weatherRouts.get("/", getSearch)
weatherRouts.put("/:id", updateWeather)
weatherRouts.delete("/:id", deleteWeather)
