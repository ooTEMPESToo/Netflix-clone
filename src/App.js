import React, { useContext } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  AuthContextProvider,
  AuthContext,
  UserAuth,
} from "./context/AuthContext.js";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import Account from "./Pages/Account.jsx";
import ProtectedRout from "./components/ProtectedRout.js";
import Footer from "./components/Footer.jsx";
import HomePage from "./components/HomePage.jsx";
function App() {
  
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRout>
                <Account />
              </ProtectedRout>
            }
          />
          <Route path="/home" element={<Home/>}/>
        </Routes>
        
      </AuthContextProvider>
    </>
  );
}

export default App;
