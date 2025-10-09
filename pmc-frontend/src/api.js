import axios from "axios";

// Base URL of your backend (Spring Boot deployed on Render)
const BASE_URL = "http://localhost:8080"; // ← change this

// User login
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/login`, userData);
    return response.data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// User signup
export const signupUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/auth/signup`, userData);
    return response.data;
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

// Get all bookings
export const Bookings = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/api/bookings`);
    return response.data;
  } catch (error) {
    console.error("Fetch bookings error:", error);
    throw error;
  }
};

// Create a new booking
export const Booking = async (bookingData) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/bookings`, bookingData);
    return response.data;
  } catch (error) {
    console.error("Booking creation error:", error);
    throw error;
  }
};

export default axios.create({
  baseURL: BASE_URL,
});
