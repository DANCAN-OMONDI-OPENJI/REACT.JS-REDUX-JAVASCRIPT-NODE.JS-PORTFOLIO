//import React, { useState } from "react";
import { connect } from "react-redux";
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

function App(props) {
  /* const [toggleColorTheme, setToggleColor] = useState(false);*/
  /* const [toggleLinks, setToggleLinks] = useState(false);
  function toggleColor() {
    setToggleColor((prevProp) => !prevProp);
  } 
  function toggleLinksDisplay() {
    setToggleLinks((prevProp) => !prevProp);
  } */
  console.log(props.toggleMyColorTheme);
  /*const color = toggleColorTheme === true ? "rgba(100, 120, 180)" : "black";
  const myColor = toggleColorTheme === true ? "black" : "whiteSmoke";*/

  return (
    <div
      className="app"
      style={{
        backgroundColor: props.toggleMyColorTheme
          ? "rgba(100, 120, 180)"
          : "black",
        color: props.toggleMyColorTheme ? "black" : "whiteSmoke",
      }}
    >
      <Header
      /*togglePageColor={toggleColor}
        togglePageLinksDisplay={toggleLinksDisplay}
        toggleLinksState={toggleLinks}
        toggleColorTheme={toggleColorTheme}*/
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route
          path="/Blog"
          element={<Blog /*colorTheme={toggleColorTheme}*/ />}
        />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    toggleMyColorTheme: state.toggleColorTheme,
  };
}

export default connect(mapStateToProps)(App);
