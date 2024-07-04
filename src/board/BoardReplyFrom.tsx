import React, {useEffect, useState} from 'react'
import {Form, Button} from 'react-bootstrap'

export default function BoardReplyFrom() {
    const [reply, setReply] = useState({userid:'',content:''})


    
    return (
        <div>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>작성자</Form.Label>
                    <Form.Control type="text"
                    name="userid" required></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>댓  글</Form.Label>
                    <Form.Control as="textarea"
                    type="text" name="content" required></Form.Control>
                </Form.Group>
                <Button type='submit'>댓글 추가</Button>
            </Form>
        </div>
    )
}
