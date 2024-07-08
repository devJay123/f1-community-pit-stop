import React from 'react';
import './home.css';
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
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
          <Carousel.Item>
            <div className="slide_item banner3"></div>
          </Carousel.Item>
        </Carousel>
      </div>
      <Container>
        <Row className="py-5 news_container">
          <h2 className="visually-hidden">뉴스</h2>
          <Col md={5} className="news_main">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.formula1.com/en/latest/article/i-cant-stop-crying-hamilton-admits-there-were-days-he-didnt-feel-good-enough.wEUg8BHFp8JHOrUieCIF3"
            >
              <p>
                ‘I can’t stop crying!’ – Hamilton admits there were days he
                ‘didn’t feel good enough’ after emotional return to winning ways
              </p>
              <div className="news_main_imgbox">
                <img src="./src/assets/news/news-main.avif" alt="" />
              </div>
            </a>
          </Col>
          <Col md={7} className="news">
            <div className="news_box">
              <Card className="news_item" style={{ width: '18rem' }}>
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
              <Card className="news_item" style={{ width: '18rem' }}>
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
              <Card className="news_item" style={{ width: '18rem' }}>
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
              <Card className="news_item" style={{ width: '18rem' }}>
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
