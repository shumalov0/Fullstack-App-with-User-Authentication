import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import { Routes,Route } from "react-router-dom";
import React from 'react'

const router = () => {
  return (
    <>
    <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="*" element={<Register/>}/>
    </Routes>
    </>
  )
}

export default router