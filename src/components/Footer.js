import React from "react";

function Footer() {
  return (
    <div class="footer shadow">
      <p className="mt-3">
        © Copyright Joshua Brown |
        <a href="https://github.com/Brownies-SE" className="ml-2 icon">
          <i class="fab fa-github"></i>
        </a>
        <span className="ml-2">|</span>
        <a
          href="https://www.linkedin.com/in/joshua-brown-9896671a2/"
          className="ml-2 icon"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <span className="ml-2">|</span>
        {/*    Not working      */}
        <a href="./public/assets/documents/Resume.pdf" className="ml-2 icon">
          <i class="fas fa-download"></i>
        </a>
      </p>
    </div>
  );
}

export default Footer;
