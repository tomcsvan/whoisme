import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import Work from "./pages/Work";
import Info from "./pages/Info";

export default function App() {
  return (
    <div className="app">
      <Topbar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/work" replace />} />
          <Route path="/work" element={<Work />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
