import React from "react";
import { connect } from "react-redux";
import { toggleColor, toggleLinksDisplay } from "./redux/index";
import { Link } from "react-router-dom";
import "./index.css";
function Header(props) {
  return (
    <div
      className="header"
      style={{
        /*backgroundColor: props.toggleColorTheme
          ? "rgba(50, 150, 250, 0.3)"
          : "rgb(0,0,0)"
        color: props.toggleColorTheme ? "black" : "white",*/
        borderBottom: props.toggleColorTheme
          ? "2px solid rgba(50, 150, 250, 0.1)"
          : "2px solid gray",
      }}
    >
      <p>DANCAN OPENJI</p>

      <ul
        className="header-links-lg"
        style={{ color: props.toggleColorTheme ? "black" : "gray" }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      {props.toggleLinksState ? (
        <ul
          className="header-links"
          style={{
            backgroundColor: props.toggleColorTheme ? "skyBlue" : "black",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button
            className="li-btn"
            btn
            style={{
              backgroundColor: "rgba(100, 120, 180)",
              display: "inlineBlock",
              fontSize: "1.3rem",
              borderColor: "whitesmoke",
              color: "whitesmoke",
            }}
            onClick={props.togglePageColor}
          >
            Toggle Color Theme
          </button>
          <div
            className="header-li-last-div"
            onClick={props.togglePageLinksDisplay}
          >
            <div>
              <hr />
              <hr />
            </div>
          </div>
        </ul>
      ) : (
        <div className="header-last-div" onClick={props.togglePageLinksDisplay}>
          <div>
            <hr />
            <hr />
            <hr />
          </div>
        </div>
      )}
      <button
        btn
        style={{
          backgroundColor: "rgba(100, 120, 180)",
          display: "inlineBlock",
          fontSize: "1.3rem",
          borderColor: "whitesmoke",
          color: "whitesmoke",
        }}
        onClick={props.togglePageColor}
      >
        Toggle Color Theme
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    toggleColorTheme: state.toggleColorTheme,
    toggleLinksState: state.toggleLinks,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    togglePageColor: () => {
      dispatch(toggleColor());
    },
    togglePageLinksDisplay: () => {
      dispatch(toggleLinksDisplay());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
