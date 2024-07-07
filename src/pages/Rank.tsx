import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

export default function Rank() {
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
        {Array.from({ length: 17 }).map((_, i) => (
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
