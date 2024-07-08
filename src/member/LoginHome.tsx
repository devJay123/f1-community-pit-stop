import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function LoginHome() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="mx-auto" md={4}>
            <Form>
              <Form.Group>
                <Form.Label>아이디</Form.Label>
                <Form.Control type="text" name="userid" />
              </Form.Group>
              <Form.Group>
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" name="passwd" />
              </Form.Group>
            </Form>
            <Link to={`/signup`}>
              <Button>회원가입</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
