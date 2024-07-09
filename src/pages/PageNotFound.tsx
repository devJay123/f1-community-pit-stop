import React from "react";
import f1tire from "../assets/f1_tire.jpg";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <Container
      className="text-center"
      style={{
        height: "100vh",
        backgroundColor: "#fff",
        color: "#000",
        fontFamily: "KoPub_Bold",
        fontSize: "2.5rem",
      }}
    >
      <Row
        className="align-items-center justify-content-center"
        style={{ height: "100%" }}
      >
        <Col>
          <h1 className="display-1">
            4
            <span
              style={{
                display: "inline-block",
                width: "100px",
                height: "100px",
                backgroundImage: `url(${f1tire})`,
                backgroundSize: "cover",
              }}
            ></span>
            4
          </h1>
          <p className="py-4">페이지를 찾을 수 없습니다.</p>
          <Button variant="dark">
            <Link to={"/"} className="text-white">
              홈으로 돌아가기
            </Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
