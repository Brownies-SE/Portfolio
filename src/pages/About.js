import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="justify-content-center" style={{ height: "100vh" }}>
      <Row>
        <Col sm={3}>
          <div className="">
            <h1>About me</h1>
            <img
              src="/assets/images/me.jpg"
              class="rounded-circle w-100 shadow"
              alt="Me"
            ></img>
          </div>
        </Col>

        <Col sm={8} className="mt-4">
          <p>
            My name is Josh Brown. I am an aspiring developer currently
            registered with Denver University Bootcamp. I anticipate completing
            the program in July 2021. With newly developed skills in JavaScript,
            CSS, React.js, and responsive web design. I am known as an
            innovative problem solver passionate about developing apps, with a
            focus on mobile-first design and development
          </p>

          <p>
            My background is the completion of a Computer Science degree at
            Metropolitian State University of Denver. I have several years of
            experience in customer service at Arrowhead Golf Club. I managed the
            pro shop, sales, and inventory using Excel. I also communicated with
            customers to ensure they had an enjoyable experience. I have been
            part of many temas and know how important it is to be a leader and
            reliable teammate.
          </p>

          <p>
            My goal is to be a full stack developer. I hope to gain enough
            knowledge to work in this sphere and gain more experience. Ive gone
            through many complicated sititations and failures that I beleive
            will allow me to succeed in this fast paced environment.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
