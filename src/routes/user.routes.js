import { Router } from "express";
import { createUser, getUsers, updateUserById } from "../controllers/user.controller.js";
import { isAdmin, verifyToken } from "../middlewares/authJwt.js";
import { checkExistingUser } from "../middlewares/verifySignup.js";

const router = Router();

router.post("/", [verifyToken, isAdmin, checkExistingUser], createUser);
router.get("/",[verifyToken, isAdmin], updateUserById);
router.put("/:userId", [verifyToken, isAdmin], updateUserById);

export default router;