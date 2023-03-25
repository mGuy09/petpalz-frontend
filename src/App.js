import React from "react";
import { Route, Routes } from "react-router";
import Footer from "./Components/Misc/Footer";
import Navbar from "./Components/Misc/Navbar";
import DashboardPage from "./Pages/DashboardPage";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import UserSettings from "./Pages/UserSettings";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/petsitters&owners" element={<DashboardPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/" element={""} />
        <Route path="/" element={""} />
        <Route path="/" element={""} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;