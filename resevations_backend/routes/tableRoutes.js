import express from "express";
import {
  createTable,
  getAllTables,
  getAvailableTables,
} from "../controllers/tableController.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";
import authenticateToken from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", authenticateToken, authorizeRoles(["admin"]), getAllTables);
router.post("/", authenticateToken, authorizeRoles(["admin"]), createTable);
router.get("/available", getAvailableTables);

export default router;
