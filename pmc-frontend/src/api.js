import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://pmc-backend-and-database-deploy-production.up.railway.app",
});

export const signupUser = async (userData) => {
  try {
    const response = await api.post("/api/auth/signup", userData);
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post("/api/auth/login", userData);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export default api;