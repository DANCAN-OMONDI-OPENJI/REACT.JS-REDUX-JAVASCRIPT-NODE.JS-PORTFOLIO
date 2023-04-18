import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
export default function Header(props) {
  return (
    <div className="header">
      <p>DANCAN OPENJI</p>

      <ul className="header-links-lg">
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
            onClick={props.toggle}
          >
            Toggle Color Theme
          </button>
          <div className="header-li-last-div" onClick={props.toggleMyLinks}>
            <div>
              <hr />
              <hr />
            </div>
          </div>
        </ul>
      ) : (
        <div className="header-last-div" onClick={props.toggleMyLinks}>
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
        onClick={props.toggle}
      >
        Toggle Color Theme
      </button>
    </div>
  );
}
