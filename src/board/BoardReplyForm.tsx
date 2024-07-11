import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export interface Reply {
  id: string;
  content: string;
  postId: string;
  userId: string; // 작성자의 ID를 저장할 필드 추가
}

interface BoardReplyFormProps {
  addReply: (newReply: Reply) => Promise<void>;
  loginUserId: string | null; // 로그인한 사용자의 ID 상태 변수
}

const BoardReplyForm: React.FC<BoardReplyFormProps> = ({ addReply, loginUserId }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!loginUserId) {
      alert('로그인 후에 댓글을 작성할 수 있습니다. 로그인 창으로 이동하겠습니다');
      navigate('/loginHome')
      return;
    }
    if (content.trim() === '') {
      alert('댓글 내용을 입력하세요.');
      return;
    }
    addReply({
      id: '', // 임시로 빈 값
      content,
      postId: '', // 임시로 빈 값
      userId: loginUserId // 로그인한 사용자의 ID
    });
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
      <Button type="submit" className="mt-2">
        댓글 추가
      </Button>
    </Form>
  );
};

export default BoardReplyForm;

