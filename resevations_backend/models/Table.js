//Create table schema with mongoose
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const tableSchema = new Schema(
  {
    capacity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const table = mongoose.model("Table", tableSchema);
