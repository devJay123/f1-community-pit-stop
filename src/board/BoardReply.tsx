import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import axios from '../lib/axiosCreate';

interface Reply {
  id: string;
  content: string;
  postId: string;
  userid: string; // 추가된 작성자 ID 필드
}

interface BoardReplyProps {
  replies: Reply[];
  onDelete: (replyId: string) => void;
  onEdit: (reply: Reply) => void;
  loginUserid?: string | null; // 로그인한 사용자의 ID
}

const BoardReply: React.FC<BoardReplyProps> = ({
  replies,
  onDelete,
  onEdit,
  loginUserid,
}) => {

  const handleEditClick = (reply: Reply) => {
    if (reply.userid !== loginUserid) {
      alert('본인이 작성한 댓글만 수정할 수 있습니다.');
      return;
    }
    onEdit(reply);
  };

  const handleDeleteClick = async (replyId: string) => {
    const yn = window.confirm('정말 삭제하시겠습니까?');
    if (yn) {
      try {
        const response = await axios.delete(`/api/boards/reply/${replyId}`);
        if (response.data.result === 'success') {
          onDelete(replyId);
        } else {
          alert('삭제 실패');
        }
      } catch (err) {
        alert('삭제 중 오류가 발생했습니다.');
        console.error(err);
      }
    }
  };

  return (
    <ListGroup>
      {replies.map((reply) => (
        <ListGroup.Item key={reply.id}>
          <div className="d-flex justify-content-between align-items-center">
            <span>{reply.content}</span>
            <div>
              {loginUserid === reply.userid && (
                <>
                  <Button
                    size="sm"
                    className="me-2 bg-black"
                    onClick={() => handleEditClick(reply)}
                  >
                    수정
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDeleteClick(reply.id)}
                  >
                    삭제
                  </Button>
                </>
              )}
            </div>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default BoardReply;
