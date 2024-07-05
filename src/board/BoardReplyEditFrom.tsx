import React, { ChangeEvent, FormEvent } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { Reply } from './BoardReplyForm';

// interface Reply {
//     id: string;
//     content: string;
//     postId?: string;
// }

interface BoardReplyEditFormProps {
  reply: Reply;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
}

const BoardReplyEditForm: React.FC<BoardReplyEditFormProps> = ({
  reply,
  onChange,
  onSubmit,
  onCancel,
}) => {
  return (
    <Modal show onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>댓글 수정</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group controlId="editReplyContent">
            <Form.Label>댓글 내용</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="content"
              value={reply.content}
              onChange={onChange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onCancel}>
            취소
          </Button>
          <Button variant="primary" type="submit">
            저장
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default BoardReplyEditForm;
