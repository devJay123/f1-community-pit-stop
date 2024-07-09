import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
// import { Reply } from './BoardReplyForm';

interface Reply {
  id: string;
  content: string;
  postId: string;
}

interface BoardReplyProps {
  replies: Reply[];
  onDelete: (replyId: string) => void;
  onEdit: (reply: Reply) => void;

}

const BoardReply: React.FC<BoardReplyProps> = ({
  replies,
  onDelete,
  onEdit,
}) => {
  return (
    <ListGroup>
      {replies.map((reply) => (
        <ListGroup.Item key={reply.id}>
          <div className="d-flex justify-content-between align-items-center">
            <span>{reply.content}</span>
            <div>
              <Button
                size="sm"
                className="me-2 bg-black"
                onClick={() => onEdit(reply)}
              >
                수정
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => onDelete(reply.id)}
              >
                삭제
              </Button>
            </div>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default BoardReply;
