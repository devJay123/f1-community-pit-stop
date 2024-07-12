import { Form, Row, Col, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from '../lib/axiosCreate';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';

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
    email: Yup.string()
      .email('올바른 이메일 형식이 아닙니다')
      .required('이메일을 입력하세요'),
  });

  const {
    register,
    handleSubmit,
    getValues,
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
        navigate('/loginHome');
      } else {
        alert('회원가입 실패.');
      }
    } catch (err) {
      console.log('Error: ' + err);
    }
  };

  const checkDuplicated = async (
    type: 'name' | 'userid' | 'email' | 'nickname' | 'passwd' | 'passwdChk'
  ) => {
    let msg = '';

    switch (type) {
      case 'nickname':
        msg = '닉네임';
        break;
      case 'email':
        msg = '이메일';
        break;
      case 'userid':
        msg = '아이디';
        break;
    }

    if (!getValues(type)) {
      return alert(`${msg} 입력해주세요!`);
    }
    const checkData = { type: type, data: getValues(type) };
    const response = await axios.post(`/api/signup/check`, checkData);

    if (response.data.result === 'success') {
      alert(`사용 가능한 ${msg}입니다.`);
    } else {
      alert(`중복된 ${msg}입니다. 다시 입력해주세요.`);
    }
  };

  return (
    <div className="position-relative z-3 signup-wrap">
      <div className="img-container"></div>
      <div className="form-container d-flex align-items-center">
        <Row className="d-flex align-items-center" style={{ width: '100%' }}>
          <Col className="bg-dark form-box" xs={11} md={5}>
            <Form className="py-2 px-3" onSubmit={handleSubmit(onSubmit)}>
              <Form.Group>
                <Form.Label style={{ margin: '10px', color: 'white' }}>
                  이름
                </Form.Label>
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
                <Form.Label style={{ margin: '10px' }}>닉네임</Form.Label>
                <div className="d-flex justify-content-between">
                  <Form.Control
                    {...register('nickname')}
                    type="text"
                    placeholder=""
                  />
                  <Button
                    className="duplicate_btn"
                    onClick={() => {
                      checkDuplicated('nickname');
                    }}
                  >
                    중복확인
                  </Button>
                </div>

                {errors.nickname && (
                  <p className="text-danger">{errors.nickname.message}</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ margin: '10px' }}>아이디</Form.Label>
                <div className="d-flex justify-content-between">
                  <Form.Control
                    {...register('userid')}
                    type="text"
                    placeholder=""
                  />
                  <Button
                    onClick={() => {
                      checkDuplicated('userid');
                    }}
                    className="duplicate_btn"
                  >
                    중복확인
                  </Button>
                </div>
                {errors.userid && (
                  <p className="text-danger">{errors.userid.message}</p>
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label style={{ margin: '10px' }}>비밀번호</Form.Label>
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
                <Form.Label style={{ margin: '10px' }}>
                  비밀번호 확인
                </Form.Label>
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
                <Form.Label style={{ margin: '10px' }}>이메일</Form.Label>
                <div className="d-flex justify-content-between">
                  <Form.Control
                    {...register('email')}
                    type="text"
                    placeholder=""
                  />
                  <Button
                    onClick={() => {
                      checkDuplicated('email');
                    }}
                    className="duplicate_btn"
                  >
                    중복확인
                  </Button>
                </div>

                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </Form.Group>
              <div className="text-center m-3">
                <Button className="mx-1" type="submit" variant="light">
                  회원가입
                </Button>
                <Button className="mx-1" type="reset" variant="danger">
                  <Link to="/loginHome" style={{ color: 'white' }}>
                    취소
                  </Link>
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}
