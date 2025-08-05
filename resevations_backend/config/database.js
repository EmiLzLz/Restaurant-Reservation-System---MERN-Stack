//enviroment variables
import "dotenv/config";
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfull database connection");
  } catch (error) {
    console.error(`Something went wrong with the connection: `, error);
    process.exit(1); //exit the process if connection fails
  }
};
