import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Row, Col, Card, Container } from 'react-bootstrap';
import BoardReply from './BoardReply';
import BoardReplyForm from './BoardReplyForm';
import BoardReplyEditForm from './BoardReplyEditFrom';
import axios from '../lib/axiosCreate';

interface Post {
    id: string;
    title: string;
    content: string;
}

interface Reply {
    id: string;
    content: string;
    postId: string;
}

export default function BoardView() {
    const { id } = useParams<{ id: string }>(); // 게시글 ID를 URL 파라미터에서 가져옵니다.
    const [post, setPost] = useState<Post | null>(null);
    const [replies, setReplies] = useState<Reply[]>([]);
    const [showEditModal, setShowEditModal] = useState(false); // 모달창
    const [editReply, setEditReply] = useState<Reply | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            await getBoard(); // 게시글 가져오기
            await getReplies(); // 댓글 가져오기
        };
        fetchData(); // 호출
    }, [id]);

    const getBoard = async () => {
        try {
            const response = await axios.get(`/api/boards/${id}`);
            setPost(response.data);
        } catch (err) {
            alert('Error: ' + err);
        }
    };

    const getReplies = async () => {
        try {
            const response = await axios.get(`/api/boards/${id}/reply`);
            setReplies(response.data);
        } catch (err) {
            alert('Error: ' + err);
        }
    };

    const addReply = async (newReply: Reply) => {
        try {
            const response = await axios.post(`/api/boards/${id}/reply`, newReply);
            console.log(newReply)
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

    const onEditInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (editReply) {
            setEditReply({ ...editReply, [e.target.name]: e.target.value });
        }
    };

    const updateReply = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (editReply) {
                const response = await axios.put(`/api/boards/reply/${editReply.id}`, editReply);
                if (response.data.result === 'success') {
                    setShowEditModal(false);
                    getReplies();
                    setEditReply(null);
                } else {
                    
                    alert('수정 실패');
                }
            }
        } catch (err) {
            alert('Error: ' + err);
        }
    };

    return (
        <Container className='py-3'>
            <h2>BoardView [ No.{id} ]</h2>
            <Card>
                <Card.Body>
                    {post ? (
                        <>
                            <h4>{post.title}</h4>
                            <hr />
                            <div className='cArea'>
                                <p>{post.content}</p>
                            </div>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </Card.Body>
                <Card.Footer>
                    <Link to="/board">Back to list</Link>
                </Card.Footer>
            </Card>
            <Row className='my-5'>
                <Col className='px-1.5'>
                    <h3 className='mt-4'>댓글 목록</h3>
                    <BoardReply 
                        replies={replies} 
                        onDelete={deleteReply} 
                        onEdit={startEditReply}
                    />
                </Col>
            </Row>
            <Row className='my-5'>
                <Col className='px-1.5'>
                    <h3 className='mt-4'>댓글 추가</h3>
                    <BoardReplyForm 
                    addReply={addReply} 
                    />
                </Col>
            </Row>
            {/* 댓글 수정 모달 */}
            {showEditModal && editReply && (
                <Row className='my-5'>
                    <Col className='px-1.5'>
                        <BoardReplyEditForm 
                            reply={editReply}
                            onChange={onEditInputChange} 
                            onSubmit={updateReply}
                            onCancel={() => setShowEditModal(false)}
                        />
                    </Col>
                </Row>
            )}
        </Container>
    );
}
