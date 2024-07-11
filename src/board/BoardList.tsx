import { useEffect, useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { useLocation, Link } from 'react-router-dom';
import {
  ListGroup,
  Row,
  Col,
  Container,
  Pagination,
  Button,
  Alert,
  Card,
} from 'react-bootstrap';

import axios from '../lib/axiosCreate';
import teams from '../lib/teamInfo';

interface ITeam {
  id: number;
  name: string;
  rank: number;
  logo: string;
  driverName1: string;
  driverProfile1: string;
  driverName2: string;
  driverProfile2: string;
  imageUrl: string;
  teamColor: string;
}

interface IBoardList {
  id: number;
  userid: string;
  title: string;
  readnum: number;
  wdate: string;
  teamnum: number;
}

interface IStateType {
  data: IBoardList[];
  limit: number;
  activePage: number;
  listLength: number;
}

export default function BoardList() {
  const location = useLocation();

  const [state, setState] = useState<IStateType>({
    data: [],
    limit: 10,
    activePage: 1,
    listLength: 0,
  });

  // 전에 안되었던 이유
  // 커뮤니티 메인에서 해당 팀의 탭 메뉴 클릭 으로 들어가는 경우 ->
  // state가 기록이 되면서 넘어가짐
  // 절차상 /community/list/teamnum 으로 state에 기록이 됨
  const teamNum: number = location.state?.teamnum;
  const teams2: ITeam[] = teams;

  const getList = async (page: number) => {
    try {
      const response = await axios.get<IBoardList[]>(
        `https://port-0-f1-community-pit-stop-server-ly5p232t0b63615b.sel5.cloudtype.app/api/boardlist/${teamNum}`
      );
      const { data } = response;
      const startIndex = (page - 1) * state.limit;
      const endIndex = page * state.limit;
      const paginatedData = data.slice(startIndex, endIndex);

      setState((prev) => ({
        ...prev,
        data: paginatedData,
        listLength: data.length,
        activePage: page,
      }));
    } catch (err: unknown) {
      console.log(
        'ERROR:',
        err instanceof Error ? err : new Error(String(err))
      );
    }
  };

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setState((prev) => ({ ...prev, activePage: pageNumber }));
  };

  const totalPages = Math.ceil(state.listLength / state.limit);

  useEffect(() => {
    const fetchData = async () => {
      await getList(state.activePage);
    };
    fetchData();
  }, [teamNum, state.activePage]);

  return (
    <Container
      style={{
        fontFamily: 'KoPub_Bold',
      }}
    >
      {teams2.map((team, i) => {
        return teamNum === i + 1 ? (
          <div key={i}>
            <div>
              <h3
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '15px',
                  fontSize: '2rem',
                  borderTop: '5px solid #000',
                  borderRight: '5px solid #000',
                  borderRadius: '0 15px 0 0',
                  borderColor: team.teamColor,
                  margin: '20px 0',
                }}
              >
                <div>
                  <span
                    style={{
                      color: team.teamColor,
                    }}
                  >
                    {team.name}
                  </span>{' '}
                  게시판
                </div>
                <Card.Img
                  src={team.logo}
                  style={{
                    width: '50px',
                    height: '50px',
                    paddingRight: '10px',
                  }}
                />
              </h3>
            </div>
            <Alert variant="secondary">
              <span style={{ display: 'block' }}>
                게시판 이용 규칙 : 비방 금지
              </span>
              <span style={{ display: 'block' }}>글쓰기 권한 : 회원</span>
            </Alert>
          </div>
        ) : (
          <div key={i}></div>
        );
      })}
      <Row className="mt-2 mb-5">
        <Row className="mb-4">
          <div className="position-relative text-end mb-2">
            {sessionStorage.getItem('loginUserid') ? (
              <Button variant="dark">
                <Link
                  className="text-white"
                  to={`/boardwrite/${teamNum}`}
                  state={{ teamnum: teamNum }}
                >
                  글쓰기
                </Link>
              </Button>
            ) : (
              <Button variant="dark" disabled>
                <Link
                  className="text-white"
                  to={`/boardwrite/${teamNum}`}
                  state={{ teamnum: teamNum }}
                >
                  글쓰기
                </Link>
              </Button>
            )}
          </div>
          <ListGroup className="">
            <ListGroup.Item className="d-flex justify-content-between align-items-start bg-secondary text-white">
              <Col md={1} className="text-center">
                번호
              </Col>
              <Col md={1} className="text-center">
                글 번호
              </Col>
              <Col md={4} className="text-center">
                제목
              </Col>
              <Col md={2} className="text-center">
                작성자
              </Col>
              <Col md={2} className="text-center">
                작성날짜
              </Col>
              <Col md={1} className="text-center">
                조회수
              </Col>
            </ListGroup.Item>
          </ListGroup>
        </Row>

        {state.data.length !== 0 ? (
          <Row>
            {state.data.length > 0 &&
              state.data.map((list, i) => {
                const reverseIndex =
                  state.listLength - (state.activePage - 1) * state.limit - i;
                return (
                  <ListGroup as="ul" key={i}>
                    <ListGroup.Item
                      as="li"
                      className="d-flex justify-content-between align-items-start"
                    >
                      <Col md={1} className="text-center">
                        <div>{reverseIndex}</div>
                      </Col>
                      <Col md={1} className="text-center">
                        <div>{list.id}</div>
                      </Col>
                      <Col md={4} className="text-center">
                        <Link to={`/boards/${teamNum}/${list.id}`}>
                          <div className="fw-bold">{list.title}</div>
                        </Link>
                      </Col>
                      <Col md={2} className="text-center">
                        <div className="">{list.userid}</div>
                      </Col>
                      <Col md={2} className="text-center">
                        <div className="">{list.wdate}</div>
                      </Col>

                      <Col md={1} className="text-center ">
                        <Badge bg="dark" className="rounded-1">
                          {list.readnum}
                        </Badge>
                      </Col>
                    </ListGroup.Item>
                  </ListGroup>
                );
              })}
          </Row>
        ) : (
          <Row>
            <Col>
              <Alert>현재 게시글이 없습니다.</Alert>
            </Col>
          </Row>
        )}
      </Row>

      <Pagination className="d-flex justify-content-center my-5 mt-5">
        <Pagination.Prev
          onClick={() => handlePageChange(state.activePage - 1)}
          disabled={state.activePage === 1}
        />
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Pagination.Item
            onClick={() => handlePageChange(page)}
            key={page}
            active={state.activePage === page}
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => handlePageChange(state.activePage + 1)}
          disabled={state.activePage === totalPages}
        />
      </Pagination>
    </Container>
  );
}
