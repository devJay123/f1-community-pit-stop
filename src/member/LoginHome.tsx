import { ChangeEvent, useState, KeyboardEvent } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from '../lib/axiosCreate';

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
    userid: '',
    passwd: '',
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', loginUser);
      if (response.data.result === 'success') {
        sessionStorage.setItem('loginUserid', loginUser.userid);
        sessionStorage.setItem('loginPasswd', loginUser.passwd);
        console.log('세션스토리지 저장 완료');
        location.href = '/';
      }
    } catch (error) {
      console.error('로그인 실패', error);
    }
  };
  const validationSchema = Yup.object().shape({
    userid: Yup.string()
      .matches(/^[a-zA-Z]+$/, {
        message: '영문자만 입력해주세요.',
        excludeEmptyString: true,
      })
      .required('아이디를 입력하세요'),
    passwd: Yup.string().required('비밀번호를 입력하세요'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpData>({
    resolver: yupResolver(validationSchema),
  });

  const onChangeInput = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  const handleKeydownInput = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    if (e.key === 'Enter') {
      e.preventDefault();
      handleLogin();
    }
  };

  return (
    <div className="z-3 position-relative login_wrap">
      <div
        className=" min-vh-100"
        style={{
          backgroundImage: 'url(/src/assets/login.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          opacity: 0.5,
        }}
      ></div>
      <Row
        className="position-absolute w-100"
        style={{ top: '35%', height: '250px', background: '#000' }}
      >
        <Col md={4} className="mx-auto d-flex" style={{ alignItems: 'center' }}>
          <div className="w-100">
            <Form
              onSubmit={handleSubmit(handleLogin)}
              className="w-100 h-100 text-light rounded"
            >
              <Form.Group>
                <Form.Label>아이디</Form.Label>
                <Form.Control
                  {...register('userid')}
                  type="text"
                  onChange={(e) => onChangeInput(e)}
                  placeholder="아이디를 입력하세요"
                />
                {errors.userid && (
                  <p className="text-danger">{errors.userid.message}</p>
                )}
              </Form.Group>
              <Form.Group style={{ marginTop: '20px' }}>
                <Form.Label>비밀번호</Form.Label>
                <Form.Control
                  {...register('passwd')}
                  type="password"
                  onChange={(e) => onChangeInput(e)}
                  placeholder="비밀번호를 입력하세요"
                  onKeyUp={handleKeydownInput}
                />
                {errors.passwd && (
                  <p className="text-danger">{errors.passwd.message}</p>
                )}
              </Form.Group>

              <div className="text-center" style={{ marginTop: '20px' }}>
                <Button
                  variant="light"
                  type="submit"
                  style={{ marginRight: '10px' }}
                >
                  로그인
                </Button>
                <Button variant="secondary" type="submit">
                  <Link to={`/signup`} style={{ color: 'white' }}>
                    회원가입
                  </Link>
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
}
