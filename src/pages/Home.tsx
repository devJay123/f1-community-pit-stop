import './home.css';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';

import newsMain from '/src/assets/news/news-main.avif';
import news1 from '/src/assets/news/news1.avif';
import news2 from '/src/assets/news/news2.avif';
import news3 from '/src/assets/news/news3.avif';
import news4 from '/src/assets/news/news4.avif';
import SliderComponent from '../F1schedule/SliderComponent';

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
                <img src={newsMain} alt="뉴스메인" />
              </div>
            </a>
          </Col>
          <Col md={7} className="news">
            <div className="news_box">
              <Card className="news_item" style={{ width: '18rem' }}>
                <a
                  target="_blank"
                  href="https://www.formula1.com/en/latest/article/hamilton-very-very-grateful-for-long-awaited-104th-f1-win-as-he-explains-why.2dest3ygDWd0pOfB0YavUm"
                >
                  <Card.Img variant="top" src={news1} alt="뉴스1" />
                  <Card.Body>
                    <Card.Title>News</Card.Title>
                    <Card.Text>
                      Hamilton ‘very, very grateful’ for long-awaited 104th F1
                      win as he explains why it feels ‘different’ to all his
                      others
                    </Card.Text>
                  </Card.Body>
                </a>
              </Card>
              <Card className="news_item" style={{ width: '18rem' }}>
                <a
                  target="_blank"
                  href="https://www.formula1.com/en/latest/article/horner-admits-perez-not-scoring-points-is-unsustainable-after-frustrating.6soUoqSKgyzOC5V7JgS3kf"
                >
                  <Card.Img variant="top" src={news2} alt="뉴스2" />
                  <Card.Body>
                    <Card.Title>News</Card.Title>
                    <Card.Text>
                      Horner admits Perez not scoring points is ‘unsustainable’
                      after ‘frustrating’ weekend at Silverstone
                    </Card.Text>
                  </Card.Body>
                </a>
              </Card>
              <Card className="news_item" style={{ width: '18rem' }}>
                <a
                  target="_blank"
                  href="https://www.formula1.com/en/latest/article/i-dont-even-know-what-to-say-anymore-leclerc-not-feeling-good-after-sunday.3YFqrfIUAGXcYPtJYWfhSB"
                >
                  <Card.Img variant="top" src={news3} alt="뉴스3" />
                  <Card.Body>
                    <Card.Title>News</Card.Title>
                    <Card.Text>
                      ‘I don’t even know what to say anymore’ – Leclerc ‘not
                      feeling good’ after Sunday to forget at Silverstone
                    </Card.Text>
                  </Card.Body>
                </a>
              </Card>
              <Card className="news_item" style={{ width: '18rem' }}>
                <a target="_blank" href="">
                  <Card.Img variant="top" src={news4} alt="뉴스4" />
                  <Card.Body>
                    <Card.Title>News</Card.Title>
                    <Card.Text>
                      ‘Both our drivers could have won’ – Brown says McLaren
                      ‘got it wrong’ after Norris and Piastri miss out at
                      Silverstone
                    </Card.Text>
                  </Card.Body>
                </a>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
