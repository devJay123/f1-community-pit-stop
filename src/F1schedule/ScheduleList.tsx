import React, { useEffect, useState } from "react";
import axios from "axios";
import ScheduleCard from "./ScheduleCard";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import f1tire from "../assets/f1_tire.jpg";

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
        const response = await axios.get("https://ergast.com/api/f1/20242.json");
        const raceList = response.data.MRData.RaceTable.Races;
        console.log(raceList);
        setRaces(raceList);
      } catch (error) {
        console.error("Error fetching and parsing JSON", error);
      }
    };

    fetchRaceData();
  }, []);

  if (races.length === 0) {
    return <Container
    className="text-center"
    style={{
      height: "100vh",
      backgroundColor: "#fff",
      color: "#000",
      fontFamily: "KoPub_Bold",
      fontSize: "2.5rem",
    }}
  >
    <Row
      className="align-items-center justify-content-center"
      style={{ height: "100%" }}
    >
      <Col>
        <h1 className="display-1">
          L
          <span
            style={{
              display: "inline-block",
              width: "100px",
              height: "100px",
              backgroundImage: `url(${f1tire})`,
              backgroundSize: "cover",
            }}
          ></span>
          ADING
        </h1>
        <p className="py-4">페이지 로딩중</p>
        <Button variant="dark">
          <Link to={"/"} className="text-white">
            홈으로 돌아가기
          </Link>
        </Button>
      </Col>
    </Row>
  </Container>;
  }

  return (
    <Container>
      <div>
        <div>
          <h2
            style={{
              position: "relative",
              padding: "15px",
              fontSize: "2rem",
              borderTop: "5px solid #000",
              borderRight: "5px solid #000",
              borderRadius: "0 15px 0 0",
              margin: "20px 0",
            }}
          >
            경기 일정
            <div
              style={{
                position: "absolute",
                right: "0",
                top: "0",
                width: "20%",
                height: "100%",
              }}
            ></div>
          </h2>
        </div>
        <div
          style={{
            backgroundColor: "rgba(25, 25, 25, 0.786)",
            width: "100%",
            height: "250px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <Card></Card>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {races.map((race) => (
            <div
              key={race.round}
              style={{ width: "300px", marginBottom: "20px" }}
            >
              <ScheduleCard race={race} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ScheduleList;
