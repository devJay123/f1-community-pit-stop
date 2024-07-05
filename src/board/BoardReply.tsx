import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

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

const BoardReply: React.FC<BoardReplyProps> = ({ replies, onDelete, onEdit }) => {
    return (
        <ListGroup>
            {replies.map(reply => (
                <ListGroup.Item key={reply.id}>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>{reply.content}</span>
                        <div>
                            <Button
                                variant="warning"
                                size="sm"
                                className="me-2"
                                onClick={() => onEdit(reply)}
                            >
                                Edit
                            </Button>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => onDelete(reply.id)}
                            >
                                Delete
                            </Button>
                        </div>
                    </div>
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default BoardReply;
