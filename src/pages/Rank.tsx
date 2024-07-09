import React from "react";
import axios from "axios";
import { Row, Col, Card, Container } from "react-bootstrap";

export default function Rank() {
  // F1그랑프리는 대회마다 1위부터 10위 선수들에게만 점수(각각 25ㆍ18ㆍ15ㆍ12ㆍ10ㆍ8ㆍ6ㆍ4ㆍ2ㆍ1)를 부여한다.
  //const url = "https://api.openf1.org/v1/drivers?session_key=latest";
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
      <h2>선수 순위</h2>
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
