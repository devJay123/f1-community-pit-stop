import React, { useState, FormEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export interface Reply {
  id: string;
  content: string;
  postId: string;
  userid: string;
}

interface BoardReplyFormProps {
  addReply: (reply: Reply) => Promise<void>;
}

const BoardReplyForm: React.FC<BoardReplyFormProps> = ({ addReply }) => {
  const [content, setContent] = useState<string>("");
  const loginUserId = sessionStorage.getItem("loginUserid");
  const navigate = useNavigate();
  console.log(loginUserId)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (loginUserId) {
      const newReply: Reply = {
        id: '',
        content,
        postId: "", // postId는 댓글이 속한 게시글의 ID로 설정합니다. 필요 시 수정.
        userid: loginUserId,
      };
      await addReply(newReply);
      setContent('');
    } else {
      alert("로그인한 사용자만 댓글을 작성할 수 있습니다.");
      navigate('/loginHome')
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="replyContent">
        <Form.Label>댓글 작성</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        등록
      </Button>
    </Form>
  );
};

export default BoardReplyForm;


