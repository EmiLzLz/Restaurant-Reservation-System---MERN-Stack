import express from "express";
import {
  getReservations,
  deleteReservation,
  createReservation,
} from "../controllers/reservationController";
import authenticateToken from "../middlewares/authMiddleware";

const router = express.Router();

// All the routes needs the authentication token because just logged users can handle reservations
router.get("/", authenticateToken, getReservations);
router.delete("/:id", authenticateToken, deleteReservation);
router.post("/", authenticateToken, createReservation);
