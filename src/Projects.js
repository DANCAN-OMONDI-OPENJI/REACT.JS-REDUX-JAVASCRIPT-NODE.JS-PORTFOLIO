import React from "react";

export default function Projects() {
  return (
    <section className="projects">
      <p>Projects Page</p>
      <p>
        Having gained all the skills required for front-end engineering, here
        are some of my projects to showcase my qualifications.
      </p>
      <div className="project-links">
        <div class="project-tile">
          <a
            href="https://github.com/DANCAN-OMONDI-OPENJI/React-Capstone-E-Comerce-Project"
            target="blank"
            rel="noreferrer"
          >
            <img
              src=".\picsuit-store-screenshot.png"
              alt="picsuit-store-link"
              width="400"
              height="200"
            />
            <p>
              <span>&lt;</span>Picsuit Ecommerce Store<span>&#47;&gt;</span>
              <span style={{ margin: "4px" }}>
                <a
                  href="https://cosmic-kelpie-393f30.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Preview Live
                </a>
              </span>
            </p>
          </a>
        </div>
        <div class="project-tile">
          <a href="https://codepen.io/0PENJI/pen/NWBENLY?editors=1111">
            <img
              src="https://cdn.freecodecamp.org/testable-projects-fcc/images/random-quote-machine.png"
              alt="random-quote-machine-link"
              width="400"
              height="200"
            />
            <p>
              <span>&lt;</span>
              Random Quote Machine<span>&#47;&gt;</span>
            </p>
          </a>
        </div>
        <div class="project-tile">
          <a
            href="https://codepen.io/0PENJI/pen/PodZbxY?editors=1111"
            target="blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.freecodecamp.org/testable-projects-fcc/images/calc.png"
              alt="JavaScript-calculator-link"
              width="400"
              height="200"
            />
            <p>
              <span>&lt;</span>Javascript Calculator<span>&#47;&gt;</span>
            </p>
          </a>
        </div>
        <div class="project-tile">
          <a
            href="https://codepen.io/0PENJI/pen/bGjOyrB?editors=1111"
            target="blank"
            rel="noreferrer"
          >
            <img
              src=".\markdown-previewer-screenshot.png"
              alt="markdown-previewer-link"
              width="400"
              height="200"
            />
            <p>
              <span>&lt;</span>Markdown Previewer<span>&#47;&gt;</span>
            </p>
          </a>
        </div>
        <div class="project-tile">
          <a
            href="https://codepen.io/0PENJI/pen/oNPNxgK"
            target="blank"
            rel="noreferrer"
          >
            <img
              src=".\drum-machine-screenshot.png"
              alt="drum-machine-link"
              width="400rem"
              height="200rem"
            />
            <p>
              <span>&lt;</span>Drum Machine<span>&#47;&gt;</span>
            </p>
          </a>
        </div>
        <div class="project-tile">
          <a
            href="https://codepen.io/0PENJI/pen/OJogLKb"
            target="blank"
            rel="noreferrer"
          >
            <img
              src=".\clock-screenshot.png"
              alt="25-+-5-link"
              width="400rem"
              height="200rem"
            />
            <p>
              <span>&lt;</span>25 + 5 Clock<span>&#47;&gt;</span>
            </p>
          </a>
        </div>
      </div>
      <div class="show-all">
        <a
          href="https://github.com/DANCAN-OMONDI-OPENJI?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <p>
            Show all
            <i className="ri-arrow-right-s-line"></i>
          </p>
        </a>
      </div>
    </section>
  );
}
