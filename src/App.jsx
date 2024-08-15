// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import TfacShortLink from "./pages/TfacShortLink";
import ProtectedRoute from "./components/ProtectRoute";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route
                    path="/tfac-short-link"
                    element={
                        <ProtectedRoute>
                            <TfacShortLink />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
