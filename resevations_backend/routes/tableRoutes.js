import express from "express";
import {
  createTable,
  getAllTables,
  getAvailableTables,
} from "../controllers/tableController";
import { authorizeRoles } from "../middlewares/roleMiddleware";
import authenticateToken from "../middlewares/authMiddleware";

const router = express.Router();

router.get("/all",authenticateToken, authorizeRoles(["admin"]), getAllTables);
router.post("/", authenticateToken, authorizeRoles(["admin"]), createTable);
router.get("/available", getAvailableTables);
