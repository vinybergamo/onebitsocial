import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages";
import Login from "../pages/login";
import Register from "../pages/register";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
