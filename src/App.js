import React from "react";
import { Route, Routes } from "react-router";
import Footer from "./Components/Misc/Footer";
import Navbar from "./Components/Misc/Navbar";
import SNOPage from "./Pages/SNOPage";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import UserSettings from "./Pages/UserSettings";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import PublicProfilePage from "./Pages/PublicProfilePage";
import AccountDetailsRegister from "./Pages/AccountDetailsRegister";
import ChatPage from "./Pages/ChatPage";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/pet-sitters&owners" element={<SNOPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/profile/:id" element={<PublicProfilePage/>} />
        <Route path="/create-profile" element={<AccountDetailsRegister/>} />
        <Route path="/Chats/:id" element={<ChatPage/>} />
        <Route path="/" element={""} />
        <Route path="/" element={""} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
