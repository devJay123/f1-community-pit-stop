import React from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export default function SignUp() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, '2자 이상으로 입력해주세요')
      .max(10, '10자 이하로 입력해주세요')
      .required('이름을 입력하세요'),
    nickname: Yup.string()
      .min(2, '2자 이상으로 입력해주세요')
      .max(10, '10자 이하로 입력해주세요')
      .required('닉네임을 입력하세요(10자 이하)'),
    userid: Yup.string()
      .matches(/^[a-zA-Z]+$/, {
        message: '영문자만 입력해주세요.',
        excludeEmptyString: true,
      })
      .required('아이디를 입력하세요'),
    passwd: Yup.string().required('비밀번호를 입력하세요'),
    passwdChk: Yup.string()
      .oneOf([Yup.ref('passwd')], '비밀번호가 일치하지 않습니다')
      .required('비밀번호를 다시 입력하세요'),
    email: Yup.string().required('이메일을 입력하세요'),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = async (data) => {};

  return (
    <Container>
      <Row>
        <Col className="mx-auto" md={8}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>이름</Form.Label>
              <Form.Control
                {...register('name')}
                type="text"
                name="name"
                placeholder="이름을 입력하세요"
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>닉네임</Form.Label>
              <Form.Control
                {...register('nickname')}
                type="text"
                name="nickname"
                placeholder="닉네임을 입력하세요"
              />
              {errors.nickname && (
                <p className="text-danger">{errors.nickname.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>아이디</Form.Label>
              <Form.Control
                {...register('userid')}
                type="text"
                name="userid"
                placeholder="아이디를 입력하세요"
              />
              {errors.userid && (
                <p className="text-danger">{errors.userid.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                {...register('passwd')}
                type="password"
                name="passwd"
                placeholder="비밀번호를 입력하세요"
              />
              {errors.passwd && (
                <p className="text-danger">{errors.passwd.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control
                {...register('passwdChk')}
                type="password"
                name="passwdChk"
                placeholder="비밀번호를 입력하세요"
              />
              {errors.passwdChk && (
                <p className="text-danger">{errors.passwdChk.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>이메일</Form.Label>
              <Form.Control
                {...register('email')}
                type="text"
                name="email"
                placeholder="이메일을 입력하세요"
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
              <div className="text-center">
                <Button className="mx-1" type="submit" variant="success">
                  회원가입
                </Button>
                <Button className="mx-1" type="reset" variant="danger">
                  취소
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
