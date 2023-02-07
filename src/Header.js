import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <p>DANCAN OPENJI</p>
      <ul className="header-links">
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
          <Link to="blog">Blog</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
