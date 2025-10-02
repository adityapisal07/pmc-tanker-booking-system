import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import History from "./pages/History";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Routes>
      {/* Public routes */}
      <Route 
        path="/login" 
        element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} 
      />
      <Route 
        path="/signup" 
        element={<Signup setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} 
      />

      {/* Protected routes */}
      <Route 
        path="/" 
        element={isLoggedIn ? <Home user={user} /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/booking" 
        element={isLoggedIn ? <Booking user={user} /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/history" 
        element={isLoggedIn ? <History user={user} /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/profile" 
        element={isLoggedIn ? <Profile user={user} /> : <Navigate to="/login" />} 
      />
      <Route 
        path="/payment" 
        element={isLoggedIn ? <Payment user={user} /> : <Navigate to="/login" />} 
      />
      
      <Route 
        path="/help" 
        element={isLoggedIn ? <Help user={user} /> : <Navigate to="/login" />} 
      />
    </Routes>
  );
}

export default App;
