import React from "react";

function Projects() {
  return (
    <section class="content container">
      <a
        href="https://tjcourey.github.io/beerMe-international/"
        target="_blank"
        rel="noopener"
      >
        <img src="https://j.gifs.com/16jYlZ.gif" alt="BeerMe Webpage image" />
        <div class="img-text">
          <span class="project-name">BeerMe</span>
          <br />
        </div>
      </a>
      <a
        href="https://shielded-fortress-40349.herokuapp.com/"
        target="_blank"
        rel="noopener"
      >
        <img
          src="https://j.gifs.com/GRZ5g3.gif"
          alt="A gif looking  at our restaurant website"
        />
        <div class="img-text">
          <span class="project-name">Insomnia-Thai</span>
          <br />
        </div>
      </a>
      <a
        href="https://github.com/Brownies-SE/MVC-Tech-Blog"
        target="_blank"
        rel="noopener"
      >
        <img src="https://j.gifs.com/Z8Vzx5.gif" alt="Gif of a blog" />
        <div class="img-text">
          <span class="project-name">Password Generator</span>
          <br />
        </div>
      </a>
    </section>
  );
}

export default Projects;
