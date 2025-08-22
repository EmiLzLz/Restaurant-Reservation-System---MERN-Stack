// routes/adminRoutes.js
import express from "express";
import { getReservations } from "../controllers/reservationController.js";
import authenticateToken from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

router.get(
  "/reservations",
  authenticateToken,
  authorizeRoles(["admin"]),
  getReservations
);

export default router;
