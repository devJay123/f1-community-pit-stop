// BoardReplyForm.tsx
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export interface Reply {
  id: string;
  content: string;
  postId: string;
  userid: string;
  wdate: string;  // 날짜 필드 추가
}


interface BoardReplyFormProps {
  addReply: (newReply: Reply) => Promise<void>;
}

const BoardReplyForm: React.FC<BoardReplyFormProps> = ({ addReply }) => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const loginUserId = sessionStorage.getItem("loginUserid");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginUserId) {
      alert("로그인이 필요합니다.");
      navigate('/loginhome')
      return;
    }

    const now = new Date();
    const formattedDate = now.toISOString().split('T')[0]; // 날짜만 가져옴
    const formattedTime = now.toTimeString().split(' ')[0]; // 시간만 가져옴

    const newReply: Reply = {
      id: '', // ID는 서버에서 생성됨
      content,
      postId: '', // 게시글 ID는 BoardView에서 설정됨
      userid: loginUserId,
      wdate: `${formattedDate} ${formattedTime}`,
    };
    console.log(newReply.wdate)

    await addReply(newReply);
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>댓글 내용</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        댓글 작성
      </Button>
    </Form>
  );
};

export default BoardReplyForm;



