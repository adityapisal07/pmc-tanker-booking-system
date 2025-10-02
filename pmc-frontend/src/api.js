import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
const api = axios.create({
  baseURL: "http://localhost:8080", // backend base URL
});

// Signup API call
export const signupUser = async (userData) => {
  try {
    const response = await api.post("/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};

export default api;
