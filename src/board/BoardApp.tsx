import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import redbull from "../assets/red-bull-racing.avif";
import ferrari from "../assets/ferrari.avif";
import mclaren from "../assets/mclaren.avif";
import mercedes from "../assets/mercedes.avif";
import astonmartin from "../assets/aston-martin.avif";
import rb from "../assets/rb.avif";
import haas from "../assets/haas.avif";
import alpine from "../assets/alpine.avif";
import williams from "../assets/williams.avif";
import sauber from "../assets/kick-sauber.avif";
import "./BoardApp.css";

interface ITeam {
  id: number;
  name: string;
  rank: number;
  logo?: string;
  driverName1: string;
  driverName2: string;
  imageUrl?: string;
  teamColor: string;
}

const teams: ITeam[] = [
  {
    id: 1,
    name: "Team 1",
    rank: 1,
    logo: "팀 로고",
    driverName1: "선수명 1",
    driverName2: "선수명 2",
    imageUrl: redbull,
    teamColor: "rgb(54 113 198 / 1)",
  },
  {
    id: 2,
    name: "Team 2",
    rank: 2,
    logo: "팀 로고",
    driverName1: "선수명 1",
    driverName2: "선수명 2",
    imageUrl: ferrari,
    teamColor: "rgb(232 0 32 /1)",
  },
  {
    id: 3,
    name: "Team 3",
    rank: 3,
    logo: "팀 로고",
    driverName1: "선수명 1",
    driverName2: "선수명 2",
    imageUrl: mclaren,
    teamColor: "rgb(255 128 0 /1)",
  },
  {
    id: 4,
    name: "Team 4",
    rank: 4,
    logo: "팀 로고",
    driverName1: "선수명 1",
    driverName2: "선수명 2",
    imageUrl: mercedes,
    teamColor: "rgb(39 244 210/1)",
  },
  {
    id: 5,
    name: "Team 5",
    rank: 5,
    logo: "팀 로고",
    driverName1: "선수명 1",
    driverName2: "선수명 2",
    imageUrl: astonmartin,
    teamColor: "rgb(34 153 113/1)",
  },
  {
    id: 6,
    name: "Team 6",
    rank: 6,
    logo: "팀 로고",
    driverName1: "선수명 1",
    driverName2: "선수명 2",
    imageUrl: rb,
    teamColor: "rgb(102 146 255/1)",
  },
  {
    id: 7,
    name: "Team 7",
    rank: 7,
    logo: "팀 로고",
    driverName1: "선수명 1",
    driverName2: "선수명 2",
    imageUrl: haas,
    teamColor: "rgb(182 186 189 /1)",
  },
  {
    id: 8,
    name: "Team 8",
    rank: 8,
    logo: "팀 로고",
    driverName1: "선수명 1",
    driverName2: "선수명 2",
    imageUrl: alpine,
    teamColor: "rgb(0 147 204 / 1)",
  },
  {
    id: 9,
    name: "Team 9",
    rank: 9,
    logo: "팀 로고",
    driverName1: "선수명 1",
    driverName2: "선수명 2",
    imageUrl: williams,
    teamColor: "rgb(100 196 255  / 1)",
  },
  {
    id: 10,
    name: "Team 10",
    rank: 10,
    logo: "팀 로고",
    driverName1: "선수명 1",
    driverName2: "선수명 2",
    imageUrl: sauber,
    teamColor: "rgb(82 226 82 /1)",
  },
];

export default function BoardApp() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Container>
      <h2>커뮤니티</h2>
      <div>
        <h3
          style={{
            padding: "15px",
            fontSize: "2rem",
            borderTop: "5px solid #000",
            borderRight: "5px solid #000",
            borderRadius: "0 15px 0 0",
            margin: "20px 0",
          }}
        >
          2024 F1 팀
        </h3>
      </div>
      <Alert variant="secondary">
        Discover everything you need to know about this year's Formula 1 teams -
        drivers, podium finishes, points earned and championship titles.
      </Alert>
      <Row>
        {teams.map((team) => (
          <Col md={6} key={team.id} className="mb-4">
            <Link
              to={`/community/list/${team.id}`}
              state={{ teamnum: team.id }}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Card
                className="card_container"
                onMouseEnter={() => setHoveredCard(team.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  border: "none",
                  borderRight: `2px solid ${
                    hoveredCard === team.id ? team.teamColor : "#000"
                  }`,
                  borderTop: `2px solid ${
                    hoveredCard === team.id ? team.teamColor : "#000"
                  }`,
                  color: `${hoveredCard === team.id ? "#fff" : "#000"}`,
                  borderRadius: "0 15px 0 0",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: team.teamColor,
                    transform:
                      hoveredCard === team.id
                        ? "translateX(0)"
                        : "translateX(-100%)",
                    transition: "transform 0.1s ease-in-out",
                    zIndex: 0,
                  }}
                />
                <Card.Body
                  style={{
                    position: "relative",
                    zIndex: 1,
                    transition:
                      "border-color 0.3s ease-in-out, margin-top 0.3s ease-in-out",
                  }}
                >
                  {/* 팀 랭킹 */}
                  <Card.Title>{team.rank}</Card.Title>

                  {/* 팀 이름 및 로고 */}
                  <Row>
                    <Col md={9} style={{ paddingRight: 0 }}>
                      <Card.Title
                        style={{
                          padding: "10px 0",
                          borderTop: "1px solid #a0a0a0",
                          borderBottom: "1px solid #a0a0a0",
                        }}
                      >
                        {team.name}
                      </Card.Title>
                    </Col>
                    <Col md={3} style={{ paddingLeft: 0 }}>
                      <Card.Title
                        style={{
                          padding: "10px 0",
                          borderTop: "1px solid #a0a0a0",
                          borderBottom: "1px solid #a0a0a0",
                        }}
                      >
                        {team.logo}
                      </Card.Title>
                    </Col>
                  </Row>

                  {/* F1 드라이버 작성*/}
                  <Row>
                    <Col md={6}>
                      <Card.Text
                        style={{
                          padding: "15px 0",
                          margin: "10px 0",
                          borderRight: "1px solid #a0a0a0",
                          borderBottom: "1px solid #a0a0a0",
                          borderRadius: "0 0 10px 0",
                        }}
                      >
                        {team.driverName1}
                      </Card.Text>
                    </Col>

                    <Col md={6}>
                      <Card.Text
                        style={{
                          padding: "15px 0",
                          margin: "10px 0",
                          borderRight: "1px solid #a0a0a0",
                          borderBottom: "1px solid #a0a0a0",
                          borderRadius: "0 0 10px 0",
                        }}
                      >
                        {team.driverName2}
                      </Card.Text>
                    </Col>
                  </Row>

                  {team.imageUrl && (
                    <Container className="bg_container">
                      <Row className="check">
                        <Col className="section1">
                          <Card.Img
                            variant="top"
                            src={team.imageUrl}
                            alt={`${team.name} image`}
                          />
                        </Col>
                      </Row>
                    </Container>
                  )}
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
