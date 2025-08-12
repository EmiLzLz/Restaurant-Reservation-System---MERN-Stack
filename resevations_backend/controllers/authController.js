import { user } from "../models/User";
import jwt from "jsonwebtoken";

const signup = async (req, res) => {
  try {
    const newUser = new user({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password,
    });
    await newUser.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    res.status(500).send(error);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find by uysername
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
    const token = jwt.sign({ id: foundUser._id, role: foundUser.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

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
