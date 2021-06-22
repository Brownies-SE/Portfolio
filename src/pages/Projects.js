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
                <h3 className="text">BeerMe</h3>
                <p className="text">Find yourself a new beer</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="rounded d-block w-100"
                src="https://j.gifs.com/GRZ5g3.gif"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className="text">Insomnia Thai</h3>
                <p className="text">Order from our world famous menu</p>
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
