import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Alert } from "react-bootstrap";

// 차량 이미지
// import redbull from "../assets/red-bull-racing.avif";
// import ferrari from "../assets/ferrari.avif";
// import mclaren from "../assets/mclaren.avif";
// import mercedes from "../assets/mercedes.avif";
// import astonmartin from "../assets/aston-martin.avif";
// import rb from "../assets/rb.avif";
// import haas from "../assets/haas.avif";
// import alpine from "../assets/alpine.avif";
// import williams from "../assets/williams.avif";
// import sauber from "../assets/kick-sauber.avif";
import teams from "../lib/teamInfo";
import "./BoardApp.css";

interface ITeam {
  id: number;
  name: string;
  rank: number;
  logo: string;
  driverName1: string;
  driverProfile1: string;
  driverName2: string;
  driverProfile2: string;
  imageUrl: string;
  teamColor: string;
}

const teams2: ITeam[] = teams;

export default function BoardApp() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <Container>
      <div>
        <h2
          style={{
            padding: "15px",
            fontSize: "2rem",
            borderTop: "5px solid #000",
            borderRight: "5px solid #000",
            borderRadius: "0 15px 0 0",
            margin: "20px 0",
          }}
        >
          커뮤니티
        </h2>
      </div>
      <Alert variant="secondary">
        Discover everything you need to know about this year's Formula 1 teams -
        drivers, podium finishes, points earned and championship titles.
      </Alert>
      <Row>
        {teams2.map((team) => (
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
                          borderTop: `${
                            hoveredCard === team.id
                              ? "1px solid #fff"
                              : "1px solid #a0a0a0"
                          }`,
                          borderBottom: `${
                            hoveredCard === team.id
                              ? "1px solid #fff"
                              : "1px solid #a0a0a0"
                          }`,
                        }}
                      >
                        {team.name}
                      </Card.Title>
                    </Col>
                    <Col md={3} style={{ paddingLeft: 0 }}>
                      <Card.Title
                        style={{
                          padding: "10px 0",
                          borderTop: `${
                            hoveredCard === team.id
                              ? "1px solid #fff"
                              : "1px solid #a0a0a0"
                          }`,
                          borderBottom: `${
                            hoveredCard === team.id
                              ? "1px solid #fff"
                              : "1px solid #a0a0a0"
                          }`,
                        }}
                      >
                        {" "}
                        <Card.Img
                          variant="top"
                          src={team.logo}
                          alt={`${team.logo} image`}
                          style={{
                            width: "32px",
                            height: "32px",
                            objectFit: "cover",
                          }}
                        />
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
                          borderTop: `${
                            hoveredCard === team.id
                              ? "1px solid #fff"
                              : "1px solid #a0a0a0"
                          }`,
                          borderBottom: `${
                            hoveredCard === team.id
                              ? "1px solid #fff"
                              : "1px solid #a0a0a0"
                          }`,
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
                          borderRight: `${
                            hoveredCard === team.id
                              ? "1px solid #fff"
                              : "1px solid #a0a0a0"
                          }`,
                          borderBottom: `${
                            hoveredCard === team.id
                              ? "1px solid #fff"
                              : "1px solid #a0a0a0"
                          }`,
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
