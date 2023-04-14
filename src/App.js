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
  const [toggleLinks, setToggleLinks] = useState(false);
  function toggleColor() {
    setToggleColor((prevProp) => !prevProp);
  }
  function toggleLinksDisplay() {
    setToggleLinks((prevProp) => !prevProp);
  }
  console.log(toggleColorTheme);
  const color = toggleColorTheme ? "rgba(100, 120, 180)" : "black";
  const myColor = toggleColorTheme ? "black" : "whiteSmoke";

  return (
    <div className="app" style={{ backgroundColor: color, color: myColor }}>
      <Header
        toggle={toggleColor}
        toggleMyLinks={toggleLinksDisplay}
        toggleLinksState={toggleLinks}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Blog" element={<Blog colorTheme={toggleColorTheme} />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
