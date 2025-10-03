import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // backend base URL
});

// Signup API call
export const signupUser = async (userData) => {
  try {
    const response = await api.post("/api/auth/signup", userData); // ✅ FIXED
    return response.data;
  } catch (error) {
    console.error("Signup failed:", error);
    throw error;
  }
};

// Login API call
export const loginUser = async (userData) => {
  try {
    const response = await api.post("/api/auth/login", userData); // ✅ FIXED
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export default api;
