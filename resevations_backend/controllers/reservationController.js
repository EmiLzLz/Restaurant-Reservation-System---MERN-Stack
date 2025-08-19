import { reservation } from "../models/Reservation.js";
import { table } from "../models/Table.js";

const getReservations = async (req, res) => {
  try {
    const userRole = req.user.role;
    let queryConditions = {};

    if (userRole === "admin") {
      //no additional conditions needed for admin to see all posts
    } else {
      // Customer just sees his reservations
      queryConditions.user = req.user.id;
    }

    const reservations = await reservation
      .find(queryConditions)
      .populate("user", "username email phone") // user data
      .populate("table", "capacity");

    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const reservToDelete = await reservation.findById(req.params.id);

    if (!reservToDelete) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    if (
      reservToDelete.user.toString() === req.user.id ||
      req.user.role === "admin"
    ) {
      await reservation.findByIdAndDelete(req.params.id);
      return res.json({ message: "Reservation deleted successfully" });
    } else {
      return res.status(403).json({ message: "Forbidden" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createReservation = async (req, res) => {
  try {
    const { date, time, partySize } = req.body;
    
    // Validaciones básicas
    if (!date || !time || !partySize) {
      return res.status(400).json({ message: "All fields required" });
    }
    
    // Combinar fecha y hora
    const reservationDateTime = new Date(`${date}T${time}`);
    
    // Buscar mesa disponible automáticamente
    const availableTable = await table.findOne({ 
      capacity: { $gte: partySize } 
    });
    
    if (!availableTable) {
      return res.status(400).json({ message: "No tables available for this party size" });
    }
    
    // Crear reserva
    const newReservation = new reservation({
      user: req.user.id,
      table: availableTable._id,
      date: reservationDateTime,
      people: partySize,
      duration: 120 // 2 horas por defecto
    });
    
    await newReservation.save();
    res.status(201).json(newReservation);
    
  } catch (error) {
    console.error("Create reservation error:", error);
    res.status(500).json({ message: error.message });
  }
};

export { getReservations, deleteReservation, createReservation };
