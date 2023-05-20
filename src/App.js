import { connect } from "react-redux";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Blog from "./Blog";
import Contact from "./Contact";
import "./index.css";

function App(props) {
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
      <Header />
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

function mapStateToProps(state) {
  return {
    toggleMyColorTheme: state.toggleColorTheme,
  };
}

export default connect(mapStateToProps)(App);
