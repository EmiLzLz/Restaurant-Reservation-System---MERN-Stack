import { createContext, useEffect, useState } from "react";
import { loginUser, signupUser, getCurrentUser } from "../api/auth";

//Create the context with a default value (e.g., null for no authenticated user)
export const AuthContext = createContext(null);

// create an authProvider component to manage authentication state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // state to hold authenticated user
  const [loading, setLoading] = useState(true); // state for initial loading
  const [error, setError] = useState(null); //state for errors

  // Check if user is authenticated on component mount
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          //check if token is valid
          const userData = await getCurrentUser();
          setUser(userData);
        } catch (error) {
          //invalid or expired token
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  //function to handle user login
  const login = async (username, password) => {
    try {
      setError(null);
      setLoading(true);

      //call to API
      const data = await loginUser(username, password);

      //save token
      localStorage.setItem("token", data.token);

      // get copmplete data from user
      const userData = await getCurrentUser();
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));

      return { success: true };
    } catch (error) {
      setError(error.message || "Login failed");
      return { success: false, error: error.message };
    }
  };

  // function to handle user signup
  const signup = async (userData) => {
    try {
      setError(null);
      setLoading(true);

      await signupUser(userData);
      return { success: true };
    } catch (error) {
      setError(error.message || "signup failed");
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  //function to handle the user logout
  const logout = () => {
    setUser(null);
    setError(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  //provide the authentication state and functions to child component
  return (
    <AuthContext.Provider
      value={{ user, loading, error, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
