import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from '../lib/axiosCreate.js';
import { AxiosResponse } from 'axios';

interface ResponseData {
  result: string;
  data?: string;
}
interface FormValues {
  userid: string;
  title: string;
  content: string;
}

export default function BoardForm() {
  const formik = useFormik<FormValues>({
    initialValues: { userid: '', title: '', content: '' },
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

      try {
        const response: AxiosResponse = await axios.post(
          '/api/board',
          postData
        );

        const responseData: ResponseData = response.data;
        if (responseData.result === 'success') {
          window.location.href = '/community';
        } else {
          alert('작성에 실패했습니다.');
        }
      } catch (err) {
        console.log('Error:', err);
      }
    },
  });

  return (
    <div>
      <Row>
        <Col className="p-3 mx-auto" md={7}>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="my-2">
              <Form.Label>제 목</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
                type="text"
                name="title"
                placeholder="제목을 입력하세요"
              />
              {formik.touched.title && formik.errors.title ? (
                <div className="text-danger">{formik.errors.title}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Label>작성자</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.userid}
                type="text"
                name="userid"
                placeholder="작성자를 입력하세요"
              />
              {formik.touched.userid && formik.errors.userid ? (
                <div className="text-danger">{formik.errors.userid}</div>
              ) : null}
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Label>내 용</Form.Label>
              <Form.Control
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.content}
                as="textarea"
                rows={12}
                name="content"
                placeholder="내용을 입력하세요"
              />
              {formik.touched.content && formik.errors.content ? (
                <div className="text-danger">{formik.errors.content}</div>
              ) : null}
            </Form.Group>
            <div className="text-center">
              <Button type="submit" variant="success" className="mx-1">
                글쓰기
              </Button>
              <Button
                onClick={formik.handleReset}
                variant="warning"
                className="mx-1 "
              >
                다시쓰기
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
