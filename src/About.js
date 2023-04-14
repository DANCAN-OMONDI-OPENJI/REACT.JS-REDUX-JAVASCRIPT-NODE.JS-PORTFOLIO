import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

export default function About() {
  const navigate = useNavigate();
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
        {
          //<i className="ri-home-4-line"></i>
          //<i className="ri-heart-3-fill fill-color heart"></i>
        }
        <div className="about-skills-img">
          <img
            src="https://www.datocms-assets.com/45470/1631110818-logo-react-js.png"
            alt="react-logo"
            width="50"
            height="25"
          ></img>
          <img
            src="https://cdn.zapier.com/storage/blog/4ec8fc7dc3a75758a3913bab9e5a4fd8_2.500x278.png"
            alt="redux-logo"
            width="50"
            height="25"
          />
          <img
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
            alt="html-logo"
            width="50"
            height="25"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            alt="css-logo"
            width="50"
            height="25"
          />
          <img
            src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png"
            alt="sass-logo"
            width="50"
            height="25"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1280px-Bootstrap_logo.svg.png"
            alt="bootstrap-logo"
            width="50"
            height="25"
          />
          <img
            src="https://w7.pngwing.com/pngs/720/46/png-transparent-jquery-plain-wordmark-logo-icon-thumbnail.png"
            alt="jquery-logo"
            width="50"
            height="25"
          />
          <img
            src="https://w7.pngwing.com/pngs/911/515/png-transparent-figma-logo-brand-logos-brands-in-colors-icon-thumbnail.png"
            alt="figma-logo"
            width="50"
            height="25"
          />
          <img
            src="https://w7.pngwing.com/pngs/152/247/png-transparent-jest-hd-logo-thumbnail.png"
            alt="jest-logo"
            width="50"
            height="25"
          />
          <img
            src="https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png"
            alt="next.js-logo"
            width="50"
            height="25"
          />
          <img
            src="https://mui.com/static/logo.png"
            alt="material-ui-logo"
            width="50"
            height="25"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1280px-Git-logo.svg.png"
            alt="git-logo"
            width="50"
            height="25"
          />
          <img
            src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png"
            alt="github-logo"
            width="50"
            height="25"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png"
            alt="tailwind-logo"
            width="50"
            height="25"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/919/919832.png"
            alt="typescript-logo"
            width="50"
            height="25"
          />
          <img
            src="https://d3r49iyjzglexf.cloudfront.net/circleci-logo-stacked-fb-657e221fda1646a7e652c09c9fbfb2b0feb5d710089bb4d8e8c759d37a832694.png"
            alt="circleci-logo"
            width="50"
            height="25"
          />
          <img
            src="https://w7.pngwing.com/pngs/640/199/png-transparent-javascript-logo-html-javascript-logo-angle-text-rectangle-thumbnail.png"
            alt="javascript-logo"
            width="50"
            height="25"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png"
            alt="javascript-logo"
            width="50"
            height="25"
          />
        </div>
      </div>
      <div className="about-education">
        <h3 id="education">Education</h3>
        <table aria-describedby="education">
          <thead>
            <tr>
              <th>School</th>
              <th>Years</th>
              <th>Qualifications</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>University Of Nairobi (UON)</td>
              <td>2018-2023</td>
              <td>
                Bachelor's degree in Electrical and Electronics Engineering
              </td>
            </tr>
            <tr>
              <td>freeCodeCamp.org</td>
              <td>2021-2023</td>
              <td>Web Development certificate</td>
            </tr>
            <tr>
              <td>Scrimba.com</td>
              <td>2022-2023</td>
              <td>Advanced React.js certificate</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="img-div">
        <h3>Family</h3>
        <p>I and my wife Faith</p>
        <img
          src="./IMG-20220701-WA0043.jpg"
          alt="Dancan Openji facing the camera"
        />
      </div>

      <button onClick={() => navigate("/")}>Home page</button>
    </section>
  );
}
