import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container className="py-5 footer_container">
        <Row className="justify-content-md-center">
          <Col md={5} className="footer_text">
            <p>Email : morest432@gamil.com</p>
            <p>Tel : 010-2222-3333</p>
          </Col>
          <Col md={5} className="footer_text">
            <p>Address: 서울특별시 중구 동대문역사문화공원</p>
            <p>대표 : 옥영빈</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
