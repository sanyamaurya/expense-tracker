import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Profile from "./pages/Profile";




import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Expenses from "./pages/Expenses";


export default function App() {
return (
<BrowserRouter>
<Navbar />
<Routes>
<Route path="/profile" element={<Profile />} />
<Route path="/" element={<Home />} />
<Route path="/signin" element={<SignIn />} />
<Route path="/dashboard" element={<Dashboard />} />
<Route path="/about" element={<About />} />
<Route path="/expenses" element={<Expenses />} />
</Routes>
</BrowserRouter>
);
}