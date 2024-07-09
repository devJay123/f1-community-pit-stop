import React, { useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "../lib/axiosCreate";

interface IUserInfo {
  userid: string;
  passwd: string;
}

interface SignUpData {
  userid: string;
  passwd: string;
}

export default function LoginHome() {
  const [loginUser, setLoginUser] = useState<IUserInfo>({
    userid: "",
    passwd: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post("/api/login", loginUser);
      if (response.data.result === "success") {
        sessionStorage.setItem("loginUserid", loginUser.userid);
        sessionStorage.setItem("loginPasswd", loginUser.passwd);
        console.log("세션스토리지 저장 완료");
        location.href = "/";
      }
    } catch (error) {
      console.error("로그인 실패", error);
    }
  };
  const validationSchema = Yup.object().shape({
    userid: Yup.string()
      .matches(/^[a-zA-Z]+$/, {
        message: "영문자만 입력해주세요.",
        excludeEmptyString: true,
      })
      .required("아이디를 입력하세요"),
    passwd: Yup.string().required("비밀번호를 입력하세요"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(validationSchema),
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  return (
    <div>
      <Container>
        <Row className="min-vh-100">
          <Col className="mx-auto d-flex justify-content-center" md={4}>
            <Form onSubmit={handleSubmit(handleLogin)}>
              <Form.Group>
                <Form.Label>아이디</Form.Label>
                <Form.Control
                  {...register("userid")}
                  type="text"
                  onChange={(e) => onChangeInput(e)}
                />
                {errors.userid && (
                  <p className="text-danger">{errors.userid.message}</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>비밀번호</Form.Label>
                <Form.Control
                  {...register("passwd")}
                  type="password"
                  onChange={(e) => onChangeInput(e)}
                />
                {errors.passwd && (
                  <p className="text-danger">{errors.passwd.message}</p>
                )}
              </Form.Group>
              <Button variant="warning" type="submit">
                로그인
              </Button>
              <Link to={`/signup`}>
                <Button type="submit">회원가입</Button>
              </Link>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
