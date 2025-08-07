//Create user schema with mongoose
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    role: {
      type: String,
      enum: ["client", "admin"],
      default: "client",
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  try {
    //Check if the password has been modified
    if (!this.isModified("password")) return next();

    //Generate a salt and hash the password
    // This make the hashed password more secure
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next(); // Proceed to save
  } catch (error) {
    next(error); // Pass any errors to the next middleware
  }
});

// Password validation method
userSchema.methods.isValidPassword = async function (password) {
  try {
    //compare provided password with stored hash
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error("Password comparison failed");
  }
};

export const user = mongoose.model("User", userSchema);
