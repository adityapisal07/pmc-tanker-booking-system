/**
 * API Configuration
 * Automatically switches between local and production URLs
 */

// Determine API base URL based on environment
const getApiBaseUrl = () => {
  // If running on localhost (local development)
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return 'http://localhost:8080';
  }
  
  // If deployed on Vercel (production)
  return 'https://pmc-tanker-booking-system-3.onrender.com';
};

const API_BASE_URL = getApiBaseUrl();

console.log('🚀 API Base URL:', API_BASE_URL);

/**
 * Helper function to handle fetch requests with error handling
 */
const apiFetch = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  console.log(`📤 ${options.method || 'GET'} Request:`, url);
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    console.log(`📥 Response Status:`, response.status);

    // Handle non-200 responses
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('❌ API Error:', errorData);
      throw new Error(errorData.message || `HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Response Data:', data);
    return data;
    
  } catch (error) {
    console.error('❌ Request failed:', error.message);
    throw error;
  }
};

// ==================== AUTH API ====================

/**
 * User Signup/Registration
 * @param {Object} userData - {name, email, password, phone}
 */
export const signupUser = async (userData) => {
  return await apiFetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};

/**
 * User Login
 * @param {Object} userData - {email, password}
 */
export const loginUser = async (userData) => {
  return await apiFetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(userData),
  });
};

/**
 * Get User Profile
 * @param {number} userId - User ID
 */
export const getUserProfile = async (userId) => {
  return await apiFetch(`/api/users/${userId}`, {
    method: 'GET',
  });
};

// ==================== BOOKING API ====================

/**
 * Create a new booking
 * @param {Object} bookingData - {name, phone, address, area, tankerType, tankerSize}
 */
export const createBooking = async (bookingData) => {
  return await apiFetch('/api/bookings', {
    method: 'POST',
    body: JSON.stringify(bookingData),
  });
};

/**
 * Get all bookings
 */
export const getAllBookings = async () => {
  return await apiFetch('/api/bookings', {
    method: 'GET',
  });
};

/**
 * Get booking by ID
 * @param {number} id - Booking ID
 */
export const getBookingById = async (id) => {
  return await apiFetch(`/api/bookings/${id}`, {
    method: 'GET',
  });
};

/**
 * Update booking
 * @param {number} id - Booking ID
 * @param {Object} bookingData - Updated booking data
 */
export const updateBooking = async (id, bookingData) => {
  return await apiFetch(`/api/bookings/${id}`, {
    method: 'PUT',
    body: JSON.stringify(bookingData),
  });
};

/**
 * Delete booking
 * @param {number} id - Booking ID
 */
export const deleteBooking = async (id) => {
  return await apiFetch(`/api/bookings/${id}`, {
    method: 'DELETE',
  });
};

// ==================== FEEDBACK/HELP API ====================

/**
 * Submit feedback or help request
 * @param {Object} feedbackData - {name, email, message}
 */
export const submitFeedback = async (feedbackData) => {
  return await apiFetch('/api/help', {
    method: 'POST',
    body: JSON.stringify(feedbackData),
  });
};

/**
 * Get all feedback
 */
export const getAllFeedback = async () => {
  return await apiFetch('/api/help', {
    method: 'GET',
  });
};

/**
 * Get feedback by ID
 * @param {number} id - Feedback ID
 */
export const getFeedbackById = async (id) => {
  return await apiFetch(`/api/help/${id}`, {
    method: 'GET',
  });
};

// ==================== UTILITY FUNCTIONS ====================

/**
 * Test backend connection
 */
export const testConnection = async () => {
  try {
    await apiFetch('/api/bookings', { method: 'GET' });
    console.log('✅ Backend connection successful!');
    return true;
  } catch (error) {
    console.error('❌ Backend connection failed!');
    return false;
  }
};

// Export API base URL for reference
export { API_BASE_URL };