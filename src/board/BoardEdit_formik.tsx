import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from '../lib/axiosCreate';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

const boardId = 3;

export default function BoardEdit() {
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/board/${boardId}`);
      const responseData = response.data;
      if (responseData.result === 'fail') {
        console.log('불러오기 실패');
      }
      console.log(responseData[0]);

      formik.setValues({
        userid: responseData[0].userid,
        title: responseData[0].title,
        content: responseData[0].content,
      });
    };
    getData();
  }, []);

  const formik = useFormik({
    initialValues: {
      userid: '',
      title: '',
      content: '',
    },
    validationSchema: Yup.object({
      userid: Yup.string().required('작성자를 입력하세요'),
      title: Yup.string()
        .max(30, '30자 이하로 작성해주세요')
        .required('제목을 입력하세요'),
      content: Yup.string().required('내용을 입력하세요'),
    }),
    onSubmit: async (values) => {
      const postData = {
        userid: values.userid,
        title: values.title,
        content: values.content,
      };
    },
  });

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group>
              <Form.Label>제목</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                type="text"
                name="title"
                placeholder="제목을 입력하세요"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>작성자</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userid}
                type="text"
                name="userid"
                placeholder="작성자를 입력하세요"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>내용</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.content}
                as="textarea"
                rows={12}
                name="content"
                placeholder="내용을 입력하세요"
              />
              <div className="text-center">
                <Button variant="success">글쓰기</Button>
                <Button onClick={formik.handleReset} variant="warning">
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
