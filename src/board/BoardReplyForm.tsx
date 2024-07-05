import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';

interface Reply {
    id?: string;
    content: string;
    postId?: string;
}

interface BoardReplyFormProps {
    addReply: (newReply: Reply) => void;
}

const BoardReplyForm: React.FC<BoardReplyFormProps> = ({ addReply }) => {
    const [content, setContent] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (content.trim() === '') {
            alert('댓글 내용을 입력하세요.');
            return;
        }
        addReply({ content });
        setContent('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="replyContent">
                <Form.Label>댓글 내용</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="댓글을 입력하세요"
                    value={content}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-2">
                댓글 추가
            </Button>
        </Form>
    );
};

export default BoardReplyForm;
