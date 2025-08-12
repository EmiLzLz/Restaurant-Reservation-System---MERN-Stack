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
    const { tableId, date, people, duration } = req.body;

    // Basic validations
    if (!tableId || !date || !people || !duration) {
      return res.status(400).json({ message: "All fields required" });
    }

    //Validate that is a future date
    const reservationDate = new Date(date);
    if (reservationDate <= new Date()) {
      return res
        .status(400)
        .json({ message: "Reservation must be in the future" });
    }

    // Search table and validate capacity
    const tableToReserve = await table.findById(tableId);
    if (!tableToReserve) {
      return res.status(404).json({ message: "Table not found" });
    }

    if (tableToReserve.capacity < people) {
      return res.status(400).json({ message: "Table capacity insufficient" });
    }

    //Check availability
    const endTime = new Date(reservationDate.getTime() + duration * 60 * 1000);

    const conflictingReservations = await reservation.find({
      table: tableId,
      date: {
        $gte: new Date(reservationDate).setHours(0, 0, 0, 0),
        $lt: new Date(reservationDate).setHours(23, 59, 59, 999),
      },
      $or: [
        {
          $and: [
            { date: { $gte: reservationDate } },
            { date: { $lt: endTime } },
          ],
        },
        {
          $expr: {
            $and: [
              { $lte: ["$date", reservationDate] },
              {
                $gt: [
                  { $add: ["$date", { $multiply: ["$duration", 60000] }] },
                  reservationDate,
                ],
              },
            ],
          },
        },
      ],
    });

    if (conflictingReservations.length > 0) {
      return res
        .status(409)
        .json({ message: "Table not available at this time" });
    }

    // Create reservation
    const newReservation = new reservation({
      user: req.user.id,
      table: tableId,
      date: reservationDate,
      people: people,
      duration: duration,
    });

    await newReservation.save();

    // Return complete data with populate
    const savedReservation = await reservation
      .findById(newReservation._id)
      .populate("user", "username email")
      .populate("table", "capacity");

    res.status(201).json(savedReservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getReservations, deleteReservation, createReservation };
