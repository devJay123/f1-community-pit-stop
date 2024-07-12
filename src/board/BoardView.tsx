import React, { useState, useEffect, FormEvent } from "react";
import { useParams, Link } from "react-router-dom";
import { Row, Col, Card, Container, Button, Badge } from "react-bootstrap";
import BoardReply from "./BoardReply";
import BoardReplyForm, { Reply } from "./BoardReplyForm";
import BoardReplyEditForm from "./BoardReplyEditFrom";
import axios from "../lib/axiosCreate";
import { teamBorderColors } from "../color";

interface Post {
  userid: string;
  id: string;
  title: string;
  content: string;
  wdate: string;
  teamnum: number;
  readnum: number;
}

interface ReplyWithUserId extends Reply {
  userId: string;
}

export default function BoardView() {
  const { id, teamnum } = useParams<{ id: string; teamnum: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [replies, setReplies] = useState<ReplyWithUserId[]>([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editReply, setEditReply] = useState<Reply | null>(null);
  const [loginUserId, setLoginUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (teamnum && id) {
        await getBoard();
        await getReplies();
        await updateReadnum();
        const userIdFromSession = sessionStorage.getItem("loginUserid");
        setLoginUserId(userIdFromSession);
      }
    };
    fetchData();
  }, [teamnum, id]);

  const getBoard = async () => {
    try {
      const response = await axios.get(`/api/boards/${teamnum}/${id}`);
      setPost(response.data);
    } catch (err) {
      alert("Error: " + err);
    }
  };


  const updateReadnum = async () => {
    try {
      const response = await axios.put(`/api/boardReadNum/${id}`);
      response;
    } catch (err) {
      alert("Error: " + err);
    }
  };

  const getReplies = async () => {
    try {
      const response = await axios.get<ReplyWithUserId[]>(
        `/api/boards/${teamnum}/${id}/reply`
      );
      setReplies(response.data);
    } catch (err) {
      alert("Error: " + err);
    }
  };

  const addReply = async (newReply: Reply): Promise<void> => {
    try {
      const response = await axios.post(`/api/boards/${id}/reply`, newReply);
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
    const yn = window.confirm(`${id}번 글을 정말 삭제하시겠습니까?`);
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

  const borderColorClass = teamBorderColors[Number(teamnum)] || "border-dark";

  return (
    <Container className="py-13">
      {
        <div className="text-end my-2">
          {loginUserId === post?.userid && (
            <>
              <Link to={`/boardEdit/${id}`} state={{ id: id, teamnum: teamnum }}>
                <Button variant="dark" className="mx-1 button">
                  수정
                </Button>
              </Link>
              <Button onClick={onDelete} variant="danger">
                삭제
              </Button>
            </>
          )}
        </div>
      }
            <div>
        <h2
          style={{
            position: 'relative',
            padding: '15px',
            fontSize: '2rem',
            borderTop: '5px solid #000',
            borderRight: '5px solid #000',
            borderRadius: '0 15px 0 0',
            margin: '20px 0',
          }}
        >
          
        </h2>
      </div>
      <Card
        className="mb-3 border-2"
        style={{ borderColor: `${borderColorClass}` }}
      >
        <Card.Body>
          <div className="Primary">
            {/* <div className="card h2 bg-secondary">
            </div> */}
          </div>
          <br />
          <div className="cArea">
            {post ? (
              <>
                <h2 className="h1 mb-2" style={{position:'relative', left:'20px'}}>{post.title}</h2>
                <div className="text-end m-1" style={{position:'absolute', right:'30px', top:'30px', }}>
                  조회수 : <Badge bg="dark">{post.readnum}</Badge>
                  <h1 className="h6"></h1>
                </div>
                <hr style={{ borderColor: `${borderColorClass}`, fontSize:'50px' }}/>
                <div className="cArea h3 p-2">
                  <p className=" h5 mt-5 m-3">{post.content}</p>
                </div>
                <Card.Footer className="bg-secondary" style={{color:'white', fontSize:'19px'}}>
                  Created on {post.wdate} by {post.userid}
                </Card.Footer>
              </>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </Card.Body>
      </Card>
      <Card
        className="mb-3 border-2"
        style={{ borderColor: `${borderColorClass}` }}
      >
        <Card.Body className="p-3">
          <Row className="my-1">
            <Col className="px-1.5">
              <h3 className="mt-4">댓글 목록</h3>
              <BoardReply
                replies={replies}
                onDelete={deleteReply}
                onEdit={startEditReply}
                loginUserId={loginUserId}
              />
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="px-1.5">
              <BoardReplyForm addReply={addReply} />
            </Col>
          </Row>
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
        </Card.Body>
      </Card>
    </Container>
  );
}

