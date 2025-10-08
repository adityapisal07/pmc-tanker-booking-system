import axios from "axios";
const express = require('express');
const cors = require('cors');

const app = express();

// Add CORS middleware BEFORE routes
app.use(cors({
  origin: 'http://localhost:3000', // Your React app URL
  credentials: true
}));

app.use(express.json());

// Your routes...
app.use('/api/auth', authRoutes);

app.listen(8080, () => {
  console.log('Server running on port 8080');
});
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
