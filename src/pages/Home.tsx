import React from "react";
import "./home.css";
import { Carousel, Container, Row, Col, Button, Card } from "react-bootstrap";
export default function Hone() {
  return (
    <div>
      <div className="main-banner">
        <Carousel>
          <Carousel.Item>
            <div className="slide_item banner1"></div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="slide_item banner2"></div>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container>
        <Row className="py-5">
          <Col md={5} className="news_main">
            <div>
              <p>뉴스메인기사칸</p>
            </div>
          </Col>
          <Col md={7} className="news">
            <div className="news_container">
              <Card className="news_item" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="news_item" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="news_item" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              <Card className="news_item" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
