import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./components/user/Login";
import Register from "./components/user/Register";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  useEffect(() => {
    // Your useEffect logic here
  }, []);

  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {!loading && (!isAuthenticated || user.role !== "admin") && <Footer />}
    </div>
  );
}

export default App;