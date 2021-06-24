import React from "react";
import { Container } from "react-bootstrap";

function Resume() {
  return (
    <Container>
      <div className="p-3">
        <h1>Resume</h1>
        <p>
          Download my Resume here:
          <a href="/assets/documents/Resume.pdf" className=" ml-2 icon">
            <i class="fas fa-download"></i>
          </a>
        </p>
        <h2>Front-end Proficiences</h2>
        <ul>
          <li>HTML</li>
          <li>CSS </li>
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
          <li>GraphQL</li>
        </ul>
      </div>
    </Container>
  );
}

export default Resume;
