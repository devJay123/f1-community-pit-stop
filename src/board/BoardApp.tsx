import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
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

interface ITeam {
  id: number;
  name: string;
  description: string;
  imageUrl?: string;
}

const teams: ITeam[] = [
  {
    id: 1,
    name: "Team 1",
    description: "선수명 1.",
    imageUrl: redbull,
  },
  {
    id: 2,
    name: "Team 2",
    description: "선수명 2.",
    imageUrl: ferrari,
  },
  {
    id: 3,
    name: "Team 3",
    description: "선수명 3.",
    imageUrl: mclaren,
  },
  {
    id: 4,
    name: "Team 4",
    description: "선수명 4.",
    imageUrl: mercedes,
  },
  {
    id: 5,
    name: "Team 5",
    description: "선수명 5.",
    imageUrl: astonmartin,
  },
  {
    id: 6,
    name: "Team 6",
    description: "선수명 6.",
    imageUrl: rb,
  },
  {
    id: 7,
    name: "Team 7",
    description: "선수명 7.",
    imageUrl: haas,
  },
  {
    id: 8,
    name: "Team 8",
    description: "선수명 8.",
    imageUrl: alpine,
  },
  {
    id: 9,
    name: "Team 9",
    description: "선수명 9.",
    imageUrl: williams,
  },
  {
    id: 10,
    name: "Team 10",
    description: "선수명 10.",
    imageUrl: sauber,
  },
];

export default function BoardApp() {
  return (
    <Container>
      <h2>커뮤니티</h2>
      <Row>
        {teams.map((team) => (
          <Col md={6} key={team.id} className="mb-4">
            <Link
              to={`/community/list/${team.id}`}
              state={{ teamnum: team.id }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Card>
                <Card.Body>
                  <Card.Title>{team.name}</Card.Title>
                  <Row>
                    <Col md={6}>
                      <Card.Text>{team.description}</Card.Text>
                    </Col>
                    <Col md={6}>
                      <Card.Text>{team.description}</Card.Text>
                    </Col>
                  </Row>

                  {team.imageUrl && (
                    <Card.Img
                      variant="top"
                      src={team.imageUrl}
                      alt={`${team.name} image`}
                    />
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

// {Array.from({ length: 10 }).map((_, i) => (
//   <Col md={6} key={i} className="mb-4">
//     <Link to={`/community/list/${i}`} state={{ teamnum: i }}>
//       <Card>
//         <Card.Body>
//           <Card.Title>타이틀</Card.Title>
//           <Card.Text>설명</Card.Text>
//         </Card.Body>
//         <Card.Img variant="top" src={teams.imageUrl} />
//       </Card>
//     </Link>
//   </Col>
// ))}
