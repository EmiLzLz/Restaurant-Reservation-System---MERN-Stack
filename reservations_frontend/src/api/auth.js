import axios from "axios";

//create an axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

//requests

// Login user - POST to /auth/login
export const loginUser = async (username, password) => {
  try {
    const response = await api.post("/auth/login", {
      username,
      password,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Login failed" };
  }
};

//Register user - POST to /auth/signup
export const signupUser = async (userData) => {
  try {
    const response = await api.post("/auth/signup", userData);

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Signup failed" };
  }
};

// Get current user - GET to /auth/me (needs token)
export const getCurrentUser = async () => {
  try {
    // get token from localstorage
    const token = localStorage.getItem("token");

    if (!token) {
      throw { message: "No token found" };
    }

    const response = await api.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Failed to get user" };
  }
};
