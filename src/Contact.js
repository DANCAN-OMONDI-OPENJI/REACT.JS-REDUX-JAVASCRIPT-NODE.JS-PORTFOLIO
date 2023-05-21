import React from "react";

export default function Contact() {
  return (
    <section id="contact-info">
      <div class="contact-info-header">
        <h2>Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
      <div class="contact-info-links">
        <a
          id="profile-link"
          href="https://www.linkedin.com/in/dancan-openji-71a6a1252/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ri-linkedin-box-fill">Linkedin</i>
        </a>
        <a
          id="profile-link"
          href="https://github.com/DANCAN-OMONDI-OPENJI?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ri-github-fill">GitHub</i>
        </a>
        <a
          id="profile-link"
          href="https://twitter.com/DancanOpenjiDev"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ri-twitter-fill">Twitter</i>
        </a>
        <a
          id="profile-link"
          href="mailto:dancanopenji9@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ri-at-line">send a mail</i>
        </a>
        <a
          id="profile-link"
          href="tel:+254 701519354"
          target="_blank"
          rel="noreferrer"
        >
          <i className="ri-smartphone-fill">call me</i>
        </a>
      </div>
    </section>
  );
}
