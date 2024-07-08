import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { Row, Col, Card, Container, Button } from "react-bootstrap";
import BoardReply from "./BoardReply";
import BoardReplyForm from "./BoardReplyForm";
import BoardReplyEditForm from "./BoardReplyEditFrom";
import BoardEdit from "./BoardEdit";
import axios from "../lib/axiosCreate";
import { number } from "yup";

interface Post {
  userid: string;
  id: string;
  title: string;
  content: string;
  teamnum: string;
  wdate: string;
}

interface Reply {
  id: string;
  content: string;
  postId: string;
}

export default function BoardView() {
  const { id, teamnum } = useParams<{ id: string; teamnum: string }>(); // 게시글 ID를 URL 파라미터에서 가져옵니다.
  // const teamnum = location.state?.teamnum;
  console.log(teamnum);
  const [post, setPost] = useState<Post | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [showEditModal, setShowEditModal] = useState(false); // 모달창
  const [editReply, setEditReply] = useState<Reply | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (teamnum && id) {
        await getBoard(); // 게시글 가져오기
        await getReplies(); // 댓글 가져오기
      }
    };
    fetchData(); // 호출
  }, [teamnum, id]);

  const getBoard = async () => {
    try {
      const response = await axios.get<Post>(`/api/boards/${teamnum}/${id}`);
      setPost(response.data);
    } catch (err) {
      alert("Error: " + err);
    }
  };

  const getReplies = async () => {
    try {
      const response = await axios.get<Reply[]>(
        `/api/boards/${teamnum}/${id}/reply`
      );
      console.log(response);
      setReplies(response.data);
    } catch (err) {
      alert("Error: " + err);
    }
  };

  const addReply = async (newReply: Reply): Promise<void> => {
    try {
      const response = await axios.post(`/api/boards/${id}/reply`, newReply);
      console.log(newReply);
      if (response.data.result === "success") {
        getReplies();
      }
    } catch (err) {
      alert("Error: " + err);
    }
  };

  const deleteReply = async (replyId: string) => {
    try {
      const response = await axios.delete(`/api/boards/reply/${replyId}`);
      if (response.data.result === "success") {
        getReplies();
      } else {
        alert("삭제 실패");
      }
    } catch (err) {
      alert("Error: " + err);
    }
  };

  const startEditReply = (reply: Reply) => {
    setEditReply(reply);
    setShowEditModal(true);
  };

  const onEditInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (editReply) {
      setEditReply({ ...editReply, [e.target.name]: e.target.value });
    }
  };

  const onDelete = async () => {
    let yn = window.confirm(`${id}번 글을 정말 삭제하시겠습니까?`);
    if (yn) {
      await axios.delete(`/api/boards/${id}`);
      window.history.back();
    }
  };

  const updateReply = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (editReply) {
        const response = await axios.put(
          `/api/boards/reply/${editReply.id}`,
          editReply
        );
        if (response.data.result === "success") {
          setShowEditModal(false);
          getReplies();
          setEditReply(null);
        } else {
          window.location.reload();
        }
      }
    } catch (err) {
      alert("Error: " + err);
    }
  };

  return (
    <Container className="py-13">
      <Card>
        <Card.Body>
          <h1 className="">F1 팀 {teamnum} 번의 이야기</h1>
          <br />
          <div className="text-end my-2">
            <h2> [ 게시글 번호.{id} ]</h2>
            <Link to={`/boardEdit/${id}`} state={{ id: id, teamnum: teamnum }}>
              <Button variant="success" className="mx-1">
                수 정
              </Button>
            </Link>
            <Button onClick={onDelete} variant="warning">
              삭 제
            </Button>
          </div>
          <hr />
          <div className="cArea">
            {post ? (
              <>
                <h2>제목 : {post.title}</h2>
                <br />
                <h4>유져이름 : {post.userid}</h4>
                <hr />
                <div className="cArea">
                  <p>{post.content}</p>
                </div>
                <Card.Footer>
                  Created on {post.wdate} by {post.userid}
                </Card.Footer>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </Card.Body>
      </Card>
      <Row className="my-5">
        <Col className="px-1.5">
          <h3 className="mt-4">댓글 목록</h3>
          <BoardReply
            replies={replies}
            onDelete={deleteReply}
            onEdit={startEditReply}
          />
        </Col>
      </Row>
      <Row className="my-5">
        <Col className="px-1.5">
          <BoardReplyForm addReply={addReply} />
        </Col>
      </Row>
      {/* 댓글 수정 모달 */}
      {showEditModal && editReply && (
        <Row className="my-5">
          <Col className="px-1.5">
            <BoardReplyEditForm
              reply={editReply}
              onChange={(e) => {
                onEditInputChange(e);
              }}
              onSubmit={updateReply}
              onCancel={() => setShowEditModal(false)}
            />
          </Col>
        </Row>
      )}
    </Container>
  );
}
