import express from "express";
import {
  getReservations,
  deleteReservation,
  createReservation,
  updateReservationStatus,
} from "../controllers/reservationController.js";
import authenticateToken from "../middlewares/authMiddleware.js";
import { authorizeRoles } from "../middlewares/roleMiddleware.js";

const router = express.Router();

// All the routes needs the authentication token because just logged users can handle reservations
router.get("/", authenticateToken, getReservations);
router.delete("/:id", authenticateToken, deleteReservation);
router.post("/", authenticateToken, createReservation);
router.patch(
  "/:id/status",
  authenticateToken,
  authorizeRoles(["admin"]),
  updateReservationStatus
);

export default router;
