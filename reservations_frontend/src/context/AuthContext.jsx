import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
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
  // useCallback avoid the creation of new functions in each render
  const login = useCallback(async (name, password) => {
    try {
      setError(null);
      setLoading(true);

      //call to API
      const data = await loginUser(name, password);

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
    } finally {
      setLoading(false);
    }
  }, []);

  // Check if user has a specific role
  const hasRole = useCallback(
    (requiredRole) => {
      return user && user.role === requiredRole;
    },
    [user]
  );

  // Check if the user is admin
  // isAdmin will help to protect admin routes
  const isAdmin = useMemo(() => {
    return user && user.role === "admin";
  }, [user]);

  // function to handle user signup
  const signup = useCallback(async (userData) => {
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
  }, []);

  //function to handle the user logout
  const logout = useCallback(() => {
    setUser(null);
    setError(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }, []);

  // usememo avoiud recreate the "value" object
  const value = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      signup,
      logout,
      hasRole,
      isAdmin,
    }),
    [user, loading, error, login, signup, logout, hasRole, isAdmin]
  );

  //provide the authentication state and functions to child component
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
