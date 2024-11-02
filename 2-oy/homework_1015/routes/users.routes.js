import express from "express"
import usersControllaer from "../controllers/users.controllers.js"
const router = express.Router()

router.get("/users", usersControllaer.getAllUsers)
router.get("/users/:id", usersControllaer.getUserById)
router.post("/users", usersControllaer.creadUser)
router.put("/users/:id", usersControllaer.updateUser)
router.delete("/users/:id", usersControllaer.deleteUser)


export default router
