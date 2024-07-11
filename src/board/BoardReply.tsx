import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Reply } from "./BoardReplyForm";

interface BoardReplyProps {
  replies: Reply[];
  onDelete: (replyId: string) => void;
  onEdit: (reply: Reply) => void;
  loginUserId: string | null;
}

const BoardReply: React.FC<BoardReplyProps> = ({ replies, onDelete, onEdit, loginUserId }) => {
  return (
    <ListGroup>
      {replies.map((reply) => (
        <ListGroup.Item key={reply.id}>
          <div className="d-flex justify-content-between" style={{padding:'10px'}}>
            <div style={{padding:'10px'}}>
              <strong style={{fontWeight:'bold'}}>{reply.userid}</strong>
              <small className="text-muted">{reply.userid}</small>
              <small className="text-muted mx-2">{reply.wdate.substring(0, 10)}</small>
            </div>
            {loginUserId === reply.userid && (
              <div>
                <Button variant="button" onClick={() => onEdit(reply)}>
                  수정
                </Button>
                <Button variant="button" onClick={() => onDelete(reply.id)}>
                  삭제
                </Button>
              </div>
            )}
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default BoardReply;

