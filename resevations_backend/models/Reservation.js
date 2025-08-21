//Create reservation schema with mongoose
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const reservationSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    table: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Table",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    people: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export const reservation = mongoose.model("Reservation", reservationSchema);
