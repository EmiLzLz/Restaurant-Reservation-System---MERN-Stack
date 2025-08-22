//create a server
import express from "express";
import { connectDB } from "./config/database.js";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import tableRoutes from "./routes/tableRoutes.js";
import reservationRoutes from "./routes/reservationRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
const app = express();
const port = process.env.PORT || 3000;

//middleware
// Allow connection between bakcend and frontend
app.use(cors());
// convert JSON to objects that i can use
app.use(express.json());

// Connect to databse
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tables", tableRoutes);
app.use("/api/reservations", reservationRoutes);
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listen on port: ${port}`);
});
