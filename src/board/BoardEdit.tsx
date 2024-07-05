import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from '../lib/axiosCreate';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

const boardId = 3;

export default function BoardEdit() {
  const validationSchema = Yup.object().shape({
    userid: Yup.string().required('작성자를 입력하세요'),
    title: Yup.string()
      .max(30, '30자 이하로 작성해주세요')
      .required('제목을 입력하세요'),
    content: Yup.string().required('내용을 입력하세요'),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: any) => {
    const response = await axios.put(`/api/board/${boardId}`, data);
    if (response.data.result === 'success') {
      window.location.href = '/';
    } else {
      console.log('fail');
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/board/${boardId}`);
      const responseData = response.data[0];

      if (responseData.result === 'fail') {
        console.log('불러오기 실패');
      }

      reset({
        title: responseData.title,
        userid: responseData.userid,
        content: responseData.content,
      });
    };

    getData();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
              <Form.Label>제목</Form.Label>
              <Form.Control
                {...register('title')}
                type="text"
                name="title"
                placeholder="제목을 입력하세요"
              />
              {errors.title && (
                <p className="text-danger">{errors.title.message}</p>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>작성자</Form.Label>
              <Form.Control
                {...register('userid')}
                type="text"
                name="userid"
                placeholder="작성자를 입력하세요"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>내용</Form.Label>
              <Form.Control
                {...register('content')}
                as="textarea"
                rows={12}
                name="content"
                placeholder="내용을 입력하세요"
              />
              <div className="text-center">
                <Button type="submit" variant="success">
                  글쓰기
                </Button>
                <Button type="reset" variant="warning">
                  다시쓰기
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
