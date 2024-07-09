import React from "react";
import axios from "axios";
import { Row, Col, Card, Container } from "react-bootstrap";

export default function Rank() {
  // F1그랑프리는 대회마다 1위부터 10위 선수들에게만 점수(각각 25ㆍ18ㆍ15ㆍ12ㆍ10ㆍ8ㆍ6ㆍ4ㆍ2ㆍ1)를 부여한다.
  // const url = "https://api.openf1.org/v1/drivers?session_key=latest";
  const url = "https://api.openf1.org/v1/sessions?year=2024";

  const data = axios
    .get(url)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <Container>
      <div>
        <h2
          style={{
            position: "relative",
            padding: "15px",
            fontSize: "2rem",
            borderTop: "5px solid #000",
            borderRight: "5px solid #000",
            borderRadius: "0 15px 0 0",
            margin: "20px 0",
          }}
        >
          선수 순위
          <div
            style={{
              position: "absolute",
              right: "0",
              top: "0",
              width: "20%",
              height: "100%",
              backgroundImage: `linear-gradient(45deg, transparent 75%, #515151 25%),
                        linear-gradient(45deg, #515151 25%, transparent 25%),
                        linear-gradient(-45deg, transparent 75%, #515151 75%),
                        linear-gradient(-45deg, #515151 25%, transparent 25%)`,
              backgroundSize: "40px 40px",
              backgroundPosition: "0 0, -20px 20px, 0 -20px, 20px 0",
            }}
          ></div>
        </h2>
      </div>
      {/* 1 ~ 3 위 */}
      <Row>
        {Array.from({ length: 3 }).map((_, i) => (
          <Col md={4} className="mb-4" key={i}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{`${i + 1}등`}</Card.Title>
                <Card.Text>{`선수명 ${i + 1}`}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        {Array.from({ length: 18 }).map((_, i) => (
          <Col md={3} className="mb-4" key={i}>
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{`${i + 4}등`}</Card.Title>
                <Card.Text>{`선수명 ${i + 4}`}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
