import React, { useEffect, useState } from "react";
import axios from "axios";
import ScheduleCard from "./ScheduleCard";
import { Card, Container } from "react-bootstrap";

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
        const response = await axios.get("https://ergast.com/api/f1/2024.json");
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
    return <div>Loading...</div>;
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
            선수 순위
            <div
              style={{
                position: "absolute",
                right: "0",
                top: "0",
                width: "20%",
                height: "100%",
                backgroundImage: `linear-gradient(45deg, transparent 75%, #515151 25%),
                            linear-gradient(45deg, #515151 25%, transparent 25%),
                            linear-gradient(-45deg, transparent 75%, #515151 75%),
                            linear-gradient(-45deg, #515151 25%, transparent 25%)`,
                backgroundSize: "40px 40px",
                backgroundPosition: "0 0, -20px 20px, 0 -20px, 20px 0",
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
