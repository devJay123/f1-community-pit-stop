import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import bgflagimg from "../assets/chequered-flag.jpg"

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

interface ScheduleCardProps {
  race: Race;
  trackImage: string; // 이미지 경로 prop 추가
}



const ScheduleCard: React.FC<ScheduleCardProps> = ({ race, trackImage }) => {


  return (
    <Container >
      <Row>
        <Col md={4} xs={12}   className="mb-5" style={{
                  width: "100%",
                  padding: "10px",  
                  borderTop: "5px solid #000",
                  borderRight: "5px solid #000",
                  borderRadius: "0 15px 0 0",
                  }}>
          <Card className="text-center" style={{ width: "15rem", border:"none" }}>
            <Card.Header style={{backgroundColor:"white", fontSize:'20px'}}><span style={{display:'flex', fontWeight:'bold'}}>ROUND {race.round}</span><br />
              <Card.Title style={{fontSize:'19px'}}>{race.raceName}</Card.Title>
              <h2 className="h5">Race</h2>
              <Card.Text style={{fontSize:'17px'}}>{race.date}</Card.Text>
              <br />
              <Card.Text style={{fontSize:'15px'}}>{race.Circuit.circuitName}</Card.Text>
              <Card.Text style={{fontSize:'17px'}}>
                {race.Circuit.Location.locality},{" "}
                {race.Circuit.Location.country}
              </Card.Text>
            </Card.Header>
            <div className="background-container">
              <div className="background-blur">
                <Card.Img className="bg-plusPattern64" variant="top" src={trackImage} alt="Track image" style={{display:"flex", width:"100%", height:"50%"}}/>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ScheduleCard;
