import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import { useLocation } from "react-router-dom";
import { ListGroup, Row, Col, Container } from "react-bootstrap";
import axios from "../lib/axiosCreate";

interface IBoardList {
  id: number;
  userid: string;
  title: string;
  readnum: number;
  wdate: string;
  teamnum: number;
}

export default function BoardList() {
  const [boardList, getBoardList] = useState<IBoardList[]>([]);

  const location = useLocation();
  console.log(location);

  const getList = async () => {
    try {
      const response = await axios.get<IBoardList[]>(`/api/boardlist/1`);
      // console.log(JSON.stringify(response.data));
      getBoardList(response.data.result);
    } catch (err: unknown) {
      console.log(
        "ERROR:",
        err instanceof Error ? err : new Error(String(err))
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getList();
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>boardList</h1>

      <Row>
        <Col md={1} className="text-center">
          번호
        </Col>
        <Col md={1} className="text-center">
          게시글 번호
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
          {boardList.length > 0 &&
            boardList.map((list, i) => (
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
                    <div className="fw-bold">{list.title}</div>
                  </Col>
                  <Col md={2} className="text-center">
                    <div className="">{list.userid}</div>
                  </Col>
                  <Col md={2} className="text-center">
                    <div className="">{list.wdate}</div>
                  </Col>
                  <div className="ms-2 me-auto"></div>
                  <Badge bg="primary" pill>
                    {list.readnum}
                  </Badge>
                </ListGroup.Item>
              </ListGroup>
            ))}
        </Row>
      </Row>
    </Container>
  );
}
