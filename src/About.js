import React from "react";
import "./App.css";

export default function About() {
  return (
    <section className="about">
      <p>
        I am a junior front-end web developer with over 2years of experience in
        building fast and interactive user interfaces with React and Redux. I am
        a camper at freeCodeCamp where I have gained skills and completed many
        projects.
      </p>
      <p>
        I love JavaScript because it is a dynamic scripting language which adds
        interactivity to my applications.
      </p>
      <div className="about-skills">
        <h3>skills</h3>
        <i className="ri-home-4-line"></i>
        <i className="ri-heart-3-fill fill-color heart"></i>
      </div>
      <div className="about-education">
        <h3>Education</h3>
      </div>
      <div className="img-div">
        <p>I and my wife Faith</p>
        <img
          src="./IMG-20220701-WA0043.jpg"
          alt="Dancan Openji facing the camera"
        />
      </div>
      <p>Home Page</p>
    </section>
  );
}
