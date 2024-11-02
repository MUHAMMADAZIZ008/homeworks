import express from "express";
import { deleteProfileMidileware, getProfileMidileware, updateProfileMidileware } from "../middleware/index.js";
import { deleteProfileController, getProfileController, updateProfile } from "../controllers/index.js";

export const profileRouter = express.Router()


profileRouter.get("/:id", getProfileMidileware, getProfileController)
profileRouter.put("/:id", updateProfileMidileware, updateProfile)
profileRouter.delete("/:id", deleteProfileMidileware, deleteProfileController)
