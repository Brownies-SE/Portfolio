import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";
import Footer from "./Footer";

function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("ABout");

  const renderPage = () => {
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default PortfolioContainer;
