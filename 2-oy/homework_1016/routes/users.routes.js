import express from "express"
import { createUser, deleteProfile, getProfile, loginUser, updateProfile } from "../controller/users.controller.js"
import { createMidil, deleteProfilMidil, loginMidil, profilMidil, updateProfilMidil } from "../middlewares/userscreate.js"


const router = express.Router()

router.post("/register", createMidil, createUser)
router.post("/login", loginMidil, loginUser)
router.get("/profile/:username", profilMidil, getProfile)
router.put("/updateProfile/:username", updateProfilMidil, updateProfile)
router.delete("/deleteProfile/:username", deleteProfilMidil, deleteProfile)



export default router