import React, { useEffect, useState } from 'react';
import axios from '../lib/axiosCreate';
import ScheduleCard from './ScheduleCard';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import track1 from '../assets/circuit/Bahrain carbon1.png';
import track2 from '../assets/circuit/Saudi Arabia carbon2.png';
import track3 from '../assets/circuit/Australia carbon3.png';
import track4 from '../assets/circuit/Japan carbon4.png';
import track5 from '../assets/circuit/China carbon5.png';
import track6 from '../assets/circuit/Miami carbon6.png';
import track7 from '../assets/circuit/Emilia Romagna carbon7.png';
import track8 from '../assets/circuit/Monte Carlo carbon8.png';
import track9 from '../assets/circuit/Canada carbon9.png';
import track10 from '../assets/circuit/Spain carbon10.png';
import track11 from '../assets/circuit/Austria carbon11.png';
import track12 from '../assets/circuit/Great Britain carbon12.png';
import track13 from '../assets/circuit/Hungar carbon13.png';
import track14 from '../assets/circuit/Belgium carbon14.png';
import track15 from '../assets/circuit/Netherlands carbon15.png';
import track16 from '../assets/circuit/Italy carbon16.png';
import track17 from '../assets/circuit/Azerbaijan carbon17.png';
import track18 from '../assets/circuit/Singapore carbon19.png';
import track19 from '../assets/circuit/USA carbon19.png';
import track20 from '../assets/circuit/Mexico carbon20.png';
import track21 from '../assets/circuit/Brazil carbon21.png';
import track22 from '../assets/circuit/Las Vegas carbon22.png';
import track23 from '../assets/circuit/Qatar carbon23.png';
import track24 from '../assets/circuit/Abu Dhab carbon24.png';
import f1tire from '../assets/f1_tire.jpg';
import bgimg from '../assets/schedulebgimg.jpg';
import '../F1schedule/Schedule.css';

const trackImages: { [key: string]: string } = {
  1: track1,
  2: track2,
  3: track3,
  4: track4,
  5: track5,
  6: track6,
  7: track7,
  8: track8,
  9: track9,
  10: track10,
  11: track11,
  12: track12,
  13: track13,
  14: track14,
  15: track15,
  16: track16,
  17: track17,
  18: track18,
  19: track19,
  20: track20,
  21: track21,
  22: track22,
  23: track23,
  24: track24,
};

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

const ScheduleList: React.FC = () => {
  const [races, setRaces] = useState<Race[]>([]);

  useEffect(() => {
    const fetchRaceData = async () => {
      try {
        const response = await axios.get('https://ergast.com/api/f1/2024.json');
        const raceList = response.data.MRData.RaceTable.Races;
        setRaces(raceList);
      } catch (error) {
        console.error('Error fetching and parsing JSON', error);
      }
    };

    fetchRaceData();
  }, []);

  if (races.length === 0) {
    return (
      <Container
        className="text-center"
        style={{
          height: '100vh',
          backgroundColor: '#fff',
          color: '#000',
          fontFamily: 'KoPub_Bold',
          fontSize: '2.5rem',
        }}
      >
        <Row
          className="align-items-center justify-content-center"
          style={{ height: '100%' }}
        >
          <Col>
            <h1 className="display-1">
              L
              <span
                style={{
                  display: 'inline-block',
                  width: '100px',
                  height: '100px',
                  backgroundImage: `url(${f1tire})`,
                  backgroundSize: 'cover',
                }}
              ></span>
              ADING
            </h1>
            <p className="py-4">페이지 로딩중</p>
            <Button variant="dark">
              <Link to={'/'} className="text-white">
                홈으로 돌아가기
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }

  const currentDate = new Date();
  const upcomingRaces = races.filter(
    (race) => new Date(race.date) >= currentDate
  );
  const nextTwoRaces = upcomingRaces.slice(0, 1);
  const remainingRaces = upcomingRaces
    .slice(1)
    .concat(races.filter((race) => new Date(race.date) < currentDate));

  return (
    <Container>
      <div>
        <div
          style={{
            backgroundImage: `url(${bgimg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '430px',
            marginTop: '20px',
            marginBottom: '20px',
            borderRadius: '0 15px 15px 15px ',
          }}
        >
          <div>
            <h2
              style={{
                position: 'relative',
                padding: '15px',
                fontSize: '2.4rem',
                borderTop: '5px solid red',
                borderRight: '5px solid red',
                borderRadius: '0 15px 0 0',
                margin: '20px 0 ',
                color: 'red',
              }}
            >
              F1 Schedule 2024
              <div
                style={{
                  position: 'absolute',
                  right: '0',
                  top: '0',
                  width: '20%',
                  height: '100%',
                }}
              ></div>
            </h2>
            <div className="div1">
              {nextTwoRaces.map((race) => (
                <Container
                  key={race.round}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    opacity: '0.9',
                  }}
                >
                  <Card
                    className="headcard"
                    style={{
                      width: '17rem',
                      height: '20rem',
                      borderTop: '5px solid #000',
                      borderRight: '5px solid #000',
                      borderRadius: '15px 15px 15px 15px',
                      backgroundColor: 'rgb(225, 225, 225)',
                    }}
                  >
                    <Card.Header style={{ fontWeight: 'bold' }}>
                      Round {race.round}
                    </Card.Header>
                    <Card.Body>
                      <p>{race.Circuit.Location.country}</p>
                      <br></br>
                      <p>{race.date}</p>
                    </Card.Body>
                    <Card.Img
                      style={{
                        width: '270px',
                        height: '190px',
                        padding: '13px',
                      }}
                      src={trackImages[race.round]}
                    />
                  </Card>
                  <div className="cardbottom">
                    <Card
                      style={{
                        width: '17rem',
                        height: '20rem',
                        padding: '15px',
                        borderTop: '5px solid #000',
                        borderRight: '5px solid #000',
                        borderRadius: '15px 15px 15px 15px',
                        backgroundColor: 'rgb(225, 225, 225)',
                      }}
                    >
                      <Card.Body>
                        FirstPractice : {race.FirstPractice.date} Time
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{' '}
                        {race.FirstPractice.time.substring(0, 5)}
                      </Card.Body>
                      <Card.Body>
                        FirstPractice : {race.SecondPractice.date} Time
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{' '}
                        {race.SecondPractice.time.substring(0, 5)}
                      </Card.Body>
                      <Card.Body>
                        FirstPractice : {race.ThirdPractice.date} Time
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{' '}
                        {race.ThirdPractice.time.substring(0, 5)}
                      </Card.Body>
                      <Card.Body>
                        FirstPractice : {race.Qualifying.date} Time
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:{' '}
                        {race.Qualifying.time.substring(0, 5)}
                      </Card.Body>
                    </Card>
                  </div>
                </Container>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            padding: '5px',
            justifyContent: 'center',
          }}
        >
          {remainingRaces.map((race) => {
            const raceDate = new Date(race.date);
            const isPast = raceDate < currentDate;
            return (
              <div
                key={race.round}
                style={{
                  padding: '10px',
                  marginBottom: '3px',
                  opacity: isPast ? 0.2 : 1,
                }}
              >
                <ScheduleCard
                  race={race}
                  trackImage={trackImages[race.round]}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default ScheduleList;
