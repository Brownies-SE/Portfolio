import React from "react";

function Resume() {
  return (
    <div className="p-3">
      <h1>Resume</h1>
      <p>
        Download my{" "}
        <a
          href="./public/assets/documents/Resume.pdf"
          className="text-decoration-none"
        >
          Resume
        </a>
      </p>
      <h2>Front-end Proficiences</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h2>Back-end Proficiences</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequalize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraohQL</li>
      </ul>
    </div>
  );
}

export default Resume;
