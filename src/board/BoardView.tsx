import React, { useState, useEffect, FormEvent } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col, Card, Container, Button, Badge } from 'react-bootstrap';
import BoardReply from './BoardReply';
import BoardReplyForm from './BoardReplyForm';
import BoardReplyEditForm from './BoardReplyEditFrom';
// import BoardEdit from './BoardEdit';
import axios from '../lib/axiosCreate';
import {teamBorderColors} from '../color'

interface Post {
  userid: string;
  id: string;
  title: string;
  content: string;
  wdate: string;
  teamnum: number;
  readnum : number;
}

interface Reply {
  id: string;
  content: string;
  postId: string;
}

export default function BoardView() {
  const { id, teamnum } = useParams<{ id: string; teamnum: string }>(); // 게시글 ID를 URL 파라미터에서 가져옵니다.
  const [post, setPost] = useState<Post | null>(null);
  const [replies, setReplies] = useState<Reply[]>([]);
  const [showEditModal, setShowEditModal] = useState(false); // 모달창
  const [editReply, setEditReply] = useState<Reply | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (teamnum && id) {
        await getBoard(); // 게시글 가져오기
        await getReplies(); // 댓글 가져오기
        await updateReadnum(); // 조회수 증가
      }
    };
    fetchData(); // 호출
  }, [teamnum, id]);

  const getBoard = async () => {
    try {
      const response = await axios.get(`/api/boards/${teamnum}/${id}`);
      setPost(response.data);
    } catch (err) {
      alert('Error: ' + err);
    }
  };

const updateReadnum = async () => {
  try {
    const response = await axios.put(
      `/api/boardReadNum/${id}`
    );
    response;
  } catch (err) {
    alert('Error: ' + err);
  }
}

  const getReplies = async () => {
    try {
      const response = await axios.get<Reply[]>(
        `/api/boards/${teamnum}/${id}/reply`
      );
      setReplies(response.data);
    } catch (err) {
      alert('Error: ' + err);
    }
  };

  const addReply = async (newReply: Reply): Promise<void> => {
    try {
      const response = await axios.post(`/api/boards/${id}/reply`, newReply);
      if (response.data.result === 'success') {
        getReplies();
      }
    } catch (err) {
      alert('Error: ' + err);
    }
  };

  const deleteReply = async (replyId: string) => {
    try {
      const response = await axios.delete(`/api/boards/reply/${replyId}`);
      if (response.data.result === 'success') {
        getReplies();
      } else {
        alert('삭제 실패');
      }
    } catch (err) {
      alert('Error: ' + err);
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
        if (response.data.result === 'success') {
          setShowEditModal(false);
          getReplies();
          setEditReply(null);
        } else {
          window.location.reload();
        }
      }
    } catch (err) {
      alert('Error: ' + err);
    }
  };

  const borderColorClass = teamBorderColors[Number(teamnum)] || 'border-dark';

  return (
    <Container className="py-13">
      <div className="text-end my-2"> 
            <Link to={`/boardEdit/${id}`} state={{ id: id, teamnum: teamnum }}>
              <Button variant="success" className="mx-1">
                수 정
              </Button>
            </Link>
            <Button onClick={onDelete} variant="warning">
              삭 제
            </Button>
          </div>
      <Card className="mb-3 border-2" style={{borderColor:`${borderColorClass}`}}>
        <Card.Body>
          <div>
            <div className="card-header h2">F1 팀 {teamnum} 번의 이야기</div>
          </div>
          <br />
          <div className="cArea">
            {post ? (
              <>
                <div className='text-end m-1'>조회수 : <Badge className='primary'>{post.readnum}</Badge>
                <h1 className='h6'>{post.userid}</h1>
                </div>
                <hr />
                <div className="cArea h3 p-5">
                <h2 className='h6 mb-4'>{post.title}</h2>
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
      <Card className="mb-3 border-2" style={{borderColor:`${borderColorClass}`}}>
        <Card.Body className='p-3'>
          <Row className="my-1">
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
        </Card.Body>
      </Card>
    </Container>
  );
}
