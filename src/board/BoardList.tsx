import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import { useLocation, Link } from "react-router-dom";
import { ListGroup, Row, Col, Container, Pagination } from "react-bootstrap";

import axios from "../lib/axiosCreate";

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
  //const [boardList, getBoardList] = useState<IBoardList[]>([]);
  const location = useLocation();

  const [state, setState] = useState<IStateType>({
    data: [],
    limit: 2,
    activePage: 1,
    listLength: 0,
  });

  // 전에 안되었던 이유
  // 커뮤니티 메인에서 해당 팀의 탭 메뉴 클릭 으로 들어가는 경우 ->
  // state가 기록이 되면서 넘어가짐
  // 절차상 /community/list/teamnum 으로 state에 기록이 됨
  const teamNum: number = location.state?.teamnum;

  const getList = async (page: number) => {
    try {
      const response = await axios.get<IBoardList[]>(
        `/api/boardlist/${teamNum ?? 0}`
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
        "ERROR:",
        err instanceof Error ? err : new Error(String(err))
      );
    }
  };

  const handlePageChange = (pageNumber: number) => {
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
    <Container>
      <h2>커뮤니티</h2>
      <Row>
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
        <Col md={2} className="text-center">
          조회수
        </Col>
        <Row>
          {state.data.length > 0 &&
            state.data.map((list, i) => (
              <ListGroup as="ul" key={i}>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <Col md={1} className="text-center">
                    <div className="d">{i + 1}</div>
                  </Col>
                  <Col md={1} className="text-center">
                    <div className="">{list.id}</div>
                  </Col>
                  <Col md={4} className="text-center">
                    <Link to={`/boards/${list.id}`}>
                      <div className="fw-bold">{list.title}</div>
                    </Link>
                  </Col>
                  <Col md={2} className="text-center">
                    <div className="">{list.userid}</div>
                  </Col>
                  <Col md={2} className="text-center">
                    <div className="">{list.wdate}</div>
                  </Col>

                  <Col md={1} className="text-center">
                    <Badge bg="primary" pill>
                      {list.readnum}
                    </Badge>
                  </Col>
                </ListGroup.Item>
              </ListGroup>
            ))}
        </Row>
      </Row>

      <Pagination>
        <Pagination.Prev />
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Pagination.Item
            onClick={() => handlePageChange(page)}
            key={page}
            disabled={state.activePage === page}
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next />
      </Pagination>
    </Container>
  );
}
