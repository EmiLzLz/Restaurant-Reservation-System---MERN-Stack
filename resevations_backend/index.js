//create a server
import express from "express";
import { connectDB } from "./config/database.js";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(cors());
app.use(express.json());

// Connect to databse
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listen on port: ${port}`);
});
