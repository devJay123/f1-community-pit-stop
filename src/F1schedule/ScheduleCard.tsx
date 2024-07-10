import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';

interface Location {
    lat: string;
    long: string;
    locality: string;
    country: string;
}

interface Circuit {
    circuitId: string;
    url: string;
    circuitName: string;
    Location: Location;
}

interface Race {
    season: string;
    round: string;
    url: string;
    raceName: string;
    Circuit: Circuit;
    date: string;
    time: string;
    FirstPractice: {
        date: string;
        time: string;
    };
    SecondPractice: {
        date: string;
        time: string;
    };
    ThirdPractice: {
        date: string;
        time: string;
    };
    Qualifying: {
        date: string;
        time: string;
    };
}

interface ScheduleCardProps {
    race: Race;
}
const formatDate = (dateString: string) => {
    return new Date(dateString).toISOString().split('T')[0]; // YYYY-MM-DD 형식으로 변환
};

const formatTime = (timeString: string) => {
    return new Date(timeString).toISOString().split('T')[1].slice(0, 8); // HH:MM:SS 형식으로 변환
};

const ScheduleCard: React.FC<ScheduleCardProps> = ({ race }) => {
    return (
        <Container >    
            <Row>   
            <Col md={4} className="mb-4">
            <Card className='text-center' style={{ width: '18rem'}}>
                <Card.Header>
                <Card.Title>{race.raceName}</Card.Title>
                <Card.Text>{race.Circuit.circuitName}</Card.Text>
                <Card.Text>{race.Circuit.Location.locality}, {race.Circuit.Location.country}</Card.Text>
                </Card.Header>
                <Card.Body>
                {/* <p>{new Date(race.date).toLocaleDateString()} at {new Date(race.time).toLocaleTimeString()}</p> */}
                {/* <h2>Practice Sessions</h2> */}
                <ul>
                    {/* <li>First Practice: {(race.FirstPractice.date).toString()} at {race.FirstPractice.time}</li> */}
                    {/* <li>Second Practice: {new Date(race.SecondPractice.date).toLocaleDateString()} at {new Date(race.SecondPractice.time).toLocaleTimeString()}</li>
                    <li>Third Practice: {new Date(race.ThirdPractice.date).toLocaleDateString()} at {new Date(race.ThirdPractice.time).toLocaleTimeString()}</li> */}
                </ul>
                <h2>Qualifying</h2>
                {/* <p>{new Date(race.Qualifying.date).toLocaleDateString()} at {new Date(race.Qualifying.time).toLocaleTimeString()}</p> */}
                <p>{race.Qualifying.date} at {race.Qualifying.time}</p>
                {/* <p>{formatDate(race.Qualifying.date)} at {formatTime(race.Qualifying.time)}</p> */}
                </Card.Body>
                <Card.Img/>
            </Card>
            </Col>
            </Row>
        </Container>
        
    );
};

export default ScheduleCard;



