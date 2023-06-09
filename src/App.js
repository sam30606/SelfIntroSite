import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { SidePage } from "./pages/SidePage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sideprojects" element={<SidePage />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
