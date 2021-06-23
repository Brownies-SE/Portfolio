import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container>
      <h1 className="text-center mt-5 project">Projects</h1>
      <Row className="middle justify-content-center">
        <Col sm={10}>
          <Carousel>
            <Carousel.Item>
              <img
                className="rounded d-block w-100"
                src="https://j.gifs.com/16jYlZ.gif"
                alt="First slide"
              />
              <Carousel.Caption>
                <a href="https://github.com/TJCourey/beerMe-international">
                  <h3 className="text">BeerMe</h3>
                </a>
                <a href="https://tjcourey.github.io/beerMe-international/">
                  <p className="text">Find yourself a new beer here</p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="rounded d-block w-100"
                src="https://j.gifs.com/GRZ5g3.gif"
                alt="Second slide"
              />

              <Carousel.Caption>
                <a href="https://github.com/Brownies-SE/Insomnia-Thai">
                  <h3 className="text">Insomnia Thai</h3>
                </a>
                <a href="https://shielded-fortress-40349.herokuapp.com/">
                  <p className="text">Order from our world famous menu</p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="rounded d-block w-100"
                src="https://j.gifs.com/Z8Vzx5.gif"
                alt="Third slide"
              />

              <Carousel.Caption>
                <a href="https://github.com/Brownies-SE/Workout-Tracker">
                  <h3 className="text">Tech Blog</h3>
                </a>
                <a href="https://floating-atoll-99700.herokuapp.com/?id=60c7c57b5529cd0015f4b06f">
                  <p className="text">Track your workouts</p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="rounded d-block w-100"
                src="https://j.gifs.com/k25v2J.gif"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="text">Tech Blog</h3>
                <p className="text">Post and interact with other users</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="rounded d-block w-100"
                src="https://j.gifs.com/Z8Vzx5.gif"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3 className="text">Tech Blog</h3>
                <p className="text">Post and interact with other users</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
