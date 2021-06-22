import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";

function Projects() {
  return (
    <Container>
      <h1 className="text-center mt-5">Projects</h1>
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
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="rounded d-block w-100"
                src="https://j.gifs.com/GRZ5g3.gif"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="rounded d-block w-100"
                src="https://j.gifs.com/Z8Vzx5.gif"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
