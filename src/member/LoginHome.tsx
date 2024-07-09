import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../lib/axiosCreate';

interface IUserInfo {
  userid: string;
  passwd: string;
}

export default function LoginHome() {
  const navigate = useNavigate();

  const [loginUser, setLoginUser] = useState<IUserInfo>({
    userid: '',
    passwd: '',
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', loginUser);
      // console.log(response);

      // navigate("/");
      location.href = '/';
    } catch (error) {
      console.error('로그인 실패', error);
    }
  };

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  return (
    <div>
      <Container className="min-vh-100">
        <Row>
          <Col className="mx-auto" md={4}>
            <Form onSubmit={handleLogin}>
              <Form.Group>
                <Form.Label>아이디</Form.Label>
                <Form.Control
                  type="text"
                  name="userid"
                  value={loginUser.userid}
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>비밀번호</Form.Label>
                <Form.Control
                  type="password"
                  name="passwd"
                  value={loginUser.passwd}
                  onChange={(e) => onChangeInput(e)}
                />
              </Form.Group>
            </Form>
            <Button variant="warning" type="submit" onClick={handleLogin}>
              로그인
            </Button>
            <Link to={`/signup`}>
              <Button type="submit">회원가입</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
