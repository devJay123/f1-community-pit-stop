import React, { useState } from 'react';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from '../lib/axiosCreate'
import { useNavigate } from 'react-router-dom';

interface SignUpData {
  name: string;
  nickname: string;
  userid: string;
  passwd: string;
  passwdChk: string;
  email: string;
}

export default function SignUp() {
  const navigate = useNavigate();
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
    email: Yup.string().email('올바른 이메일 형식이 아닙니다').required('이메일을 입력하세요'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: SignUpData) => {
    try {
      const response = await axios.post('/api/signup', data);
      const responseData = response.data;
      if (responseData && responseData.result === 'success') {
        alert('회원가입 완료. 로그인 페이지로 이동합니다');
        navigate('/loginHome')
      } else {
        alert('회원가입 실패.');
      }
    } catch (err) {
      console.log('Error: ' + err);
    }
  };

  return (
    <Container>
      <Row>
        <Col className="mx-auto" style={{width: '40%', marginTop:'30px'}} md={8}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label style={{margin:'10px'}}>이름</Form.Label>
              <Form.Control
                {...register('name')}
                type="text"
                placeholder=""
              />
              {errors.name && (
                <p className="text-danger">{errors.name.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label style={{margin:'10px'}}>닉네임</Form.Label>
              <Form.Control
                {...register('nickname')}
                type="text"
                placeholder=""
              />
              {errors.nickname && (
                <p className="text-danger">{errors.nickname.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label style={{margin:'10px'}}>아이디</Form.Label>
              <Form.Control
                {...register('userid')}
                type="text"
                placeholder=""
              />
              {errors.userid && (
                <p className="text-danger">{errors.userid.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label style={{margin:'10px'}}>비밀번호</Form.Label>
              <Form.Control
                {...register('passwd')}
                type="password"
                placeholder=""
              />
              {errors.passwd && (
                <p className="text-danger">{errors.passwd.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label style={{margin:'10px'}}>비밀번호 확인</Form.Label>
              <Form.Control
                {...register('passwdChk')}
                type="password"
                placeholder=""
              />
              {errors.passwdChk && (
                <p className="text-danger">{errors.passwdChk.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label style={{margin:'10px'}}>이메일</Form.Label>
              <Form.Control
                {...register('email')}
                type="text"
                placeholder=""
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </Form.Group>
            <div className="text-center">
              <Button className="mx-1" type="submit" variant="success">
                회원가입
              </Button>
              <Button className="mx-1" type="reset" variant="danger">
                취소
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}