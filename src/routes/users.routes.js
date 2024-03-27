import { Router } from "express";
import { verifyToken, isModerator, isAdmin } from "../middlewares/authJwt.js";
import { getUser, getUsers, updateUserById } from "../controllers/users.controller.js";

const router = Router();

router.get("/", getUsers);
router.get("/:userId", getUser);
router.put("/:userId", [verifyToken, isModerator], updateUserById);

export default router;
