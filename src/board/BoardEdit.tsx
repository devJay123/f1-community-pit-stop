import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from '../lib/axiosCreate';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export default function BoardEdit() {
  const location = useLocation();

  const boardId = location.state.id;
  const teamnum = location.state.teamnum;

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
    const response = await axios.put(`/api/boards/${boardId}`, data);
    if (response.data.result === 'success') {
      window.location.href = `/boards/${teamnum}/${boardId}`;
    } else {
      console.log('fail');
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/boards/${boardId}`);

      const responseData = response.data[0];

      // if (responseData.result === 'fail') {
      //   console.log('불러오기 실패');
      // }

      reset({
        title: responseData.title,
        userid: responseData.userid,
        content: responseData.content,
      });
    };

    getData();
  }, []);

  return (
    <div className='EditForm'>
    <Container>
      <Row>
        <Col className="p-4 mt-3 mb-3 mx-auto EditFormRow" md={8}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="my-2">
              <Form.Label className='h3 m-2'>제목</Form.Label>
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
            <Form.Group className="my-2">
              <Form.Label className='h3 m-2'>작성자</Form.Label>
              <Form.Control
                {...register('userid')}
                readOnly
                type="text"
                name="userid"
                placeholder="작성자를 입력하세요"
              />
              {errors.userid && (
                <p className="text-danger">{errors.userid.message}</p>
              )}
            </Form.Group>
            <Form.Group className="my-2">
              <Form.Label className='h3 m-2'>내용</Form.Label>
              <Form.Control
                {...register('content')}
                as="textarea"
                rows={12}
                name="content"
                placeholder="내용을 입력하세요"
              />
              {errors.content && (
                <p className="text-danger">{errors.content.message}</p>
              )}
              <div className="text-center mt-4">
                <Button className="mx-1" type="submit" variant="dark">
                  글쓰기
                </Button>
                <Button className="mx-1" type="reset" variant="danger">
                  다시쓰기
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
