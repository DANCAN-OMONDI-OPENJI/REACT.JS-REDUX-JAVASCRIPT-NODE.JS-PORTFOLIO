import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
//import Counter from "./counter";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";
import "./index.css";

function App() {
  const [toggleColorTheme, setToggleColor] = useState(false);
  function toggleColor() {
    setToggleColor((prevProp) => !prevProp);
  }
  console.log(toggleColorTheme);
  const color = toggleColorTheme ? "rgba(100, 120, 180)" : "black";
  return (
    <div className="app" style={{ backgroundColor: color }}>
      <Header toggle={toggleColor} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
