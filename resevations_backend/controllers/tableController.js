import { table } from "../models/Table";
import { reservation } from "../models/Reservation";

const getAllTables = async (req, res) => {
  try {
    //find all tables in the Table collection
    const tables = await table.find({});

    //send the retrieved documents as a JSON response
    res.status(200).json(tables);
  } catch (error) {
    //Hanlde any errors that occur during the database operation
    res.status(500).json({ message: error.message });
  }
};

const createTable = async (req, res) => {
  try {
    const { capacity } = req.body;

    //basic validation
    if (!capacity || !Number.isInteger(capacity) || capacity <= 0) {
      return res.status(400).json({ message: "Valid capacity required" });
    }

    const newTable = new table({
      capacity,
    });

    await newTable.save();
    res.status(201).json(newTable);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAvailableTables = async (req, res) => {
  try {
    const { date, time, duration, people } = req.query;

    //basic validations
    if (!date || !time || !duration) {
      return res
        .status(400)
        .json({ message: "Date, time and duration required" });
    }

    //convert to Date Objects
    const reservationDate = new Date(date);
    const [hours, minutes] = time.split(":");
    reservationDate.setHours(hours, minutes, 0, 0);

    //calculate end time
    const endTime = new Date(reservationDate.getTime() + duration * 60 * 1000);

    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    //Find reservations that overlap with the requested time
    const conflictingReservations = await reservation.find({
      date: {
        $gte: startOfDay,
        $lt: endOfDay,
      },
      $or: [
        //Reservation starts during our time
        {
          $and: [
            { date: { $gte: reservationDate } },
            { date: { $lt: endTime } },
          ],
        },
        //Reservation ends during our time
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

    //get ocuppied tables ID's
    const occupiedTablesIds = conflictingReservations.map((res) => res.table);

    //search available tables
    let availableTablesQuery = { _id: { $nin: occupiedTablesIds } };

    //if there are a people number, filter by capacity
    if (people) {
      availableTablesQuery.capacity = { $gte: parseInt(people) };
    }

    const availableTables = await table.find(availableTablesQuery);

    res.json(availableTables);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllTables, createTable, getAvailableTables };
