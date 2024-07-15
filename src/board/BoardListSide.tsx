import React from 'react'
import { Button, ListGroup, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export default function BoardListSide() {

    const navigate = useNavigate();

    const moveLoc =() => {
        let yn = window.confirm('이동 하실?')

        if(yn) {
            navigate('/community/list/1')
        }
    }

    return (
        <Stack gap={1}>
            <Button variant='light' onClick={moveLoc}>RedBull</Button>
            <ListGroup>
            <ListGroup.Item as={Link} to={`/community/list/1`}>RedBull</ListGroup.Item>
            </ListGroup>
            
        </Stack>
    )
}
