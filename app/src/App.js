import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/AboutPage";

import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
