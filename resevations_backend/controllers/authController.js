import { user } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const signup = async (req, res) => {
  console.log("Request body:", req.body);

  try {
    const newUser = new user({
      username: req.body.name, // ← Changed from username to name
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });

    await newUser.save();
    res
      .status(201)
      .json({
        message: "User created successfully",
        user: {
          id: newUser._id,
          username: newUser.username,
          email: newUser.email,
        },
      });
  } catch (error) {
    console.error("Signup error:", error); // ← Better error logging
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log("Login attempt for:", username);
    console.log("Full request body:", req.body);
    // Find by username
    const foundUser = await user.findOne({ username });

    if (!foundUser) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // verify password
    const isPasswordValid = await foundUser.isValidPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: foundUser._id, role: foundUser.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    //return token
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const me = async (req, res) => {
  try {
    //req.user.id comes from authmiddleware
    const currentUser = await user.findById(req.user.id).select("-password");

    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(currentUser);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export { signup, login, me };
