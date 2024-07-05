import React, {useState} from 'react'
import { useParams, Link, useNavigate} from 'react-router-dom'
import {Row,Col,Card, Container} from 'react-bootstrap'
import BoardReply from './BoardReply'
import BoardReplyFrom from './BoardReplyFrom'
import BoardReplyEditFrom from './BoardReplyEditFrom'


export default function BoardView() {
    const [logId, setLogId] = useState('');
    const [addReply, setaddReply] = useState('');

    


    
    return (
        <Container className='py-3'>
            
            <h2>BoardView [ No.]</h2>
            <Card>
                <Card.Body>
                    <h4> </h4>
                    <hr />
                    <div className='cArea'>
                    </div>
                </Card.Body>
                <Card.Footer>
                    
                </Card.Footer>
            </Card>
            <Row className='my-5'>
                <Col className='px-1.5'>
                    <h3 className='mt-4'>댓글 목록</h3>
                    <BoardReply/>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col className='px-1.5'>
                    <h3 className='mt-4'>댓글 추가</h3>
                    <BoardReplyFrom/>
                </Col>
            </Row>

            {/* 댓글 수정 모달 */}
            <Row className='my-5'>
                <Col className='px-1.5'>
                    <BoardReplyEditFrom/>
                </Col>
            </Row>
        </Container>
    )
}
