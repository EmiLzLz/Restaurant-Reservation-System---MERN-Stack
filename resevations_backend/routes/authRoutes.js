import express from "express";
import { signup, login, me } from "../controllers/authController.js";
import authenticateToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", authenticateToken, me)

export default router;
