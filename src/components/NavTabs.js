import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="shadow p-3 mb-5 bg-body rounded"
    >
      <Navbar.Brand>Josh Brown</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </Nav.Link>
        <Nav.Link>
          <a
            href="#projects"
            onClick={() => handlePageChange("Projects")}
            className={
              currentPage === "Projects" ? "nav-link active" : "nav-link"
            }
          >
            Projects
          </a>
        </Nav.Link>
        <Nav.Link>
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            className={
              currentPage === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </Nav.Link>
        <Nav.Link>
          <a
            href="#resume"
            onClick={() => handlePageChange("Resume")}
            className={
              currentPage === "Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </a>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavTabs;
