import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col, Card, Container, Badge } from "react-bootstrap";
import profile from "../lib/driverProfile";

interface IDrivers {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  permanentNumber: string;
  url: string;
  points: string;
  position: string;
  positionText: string;
  wins: string;
}
interface IDriversProfile {
  teamName: string;
  driverName: string;
  driverProfile: string;
  teamColor: string;
  nameCode: string;
}

export default function Rank() {
  const [drivers, setDrivers] = useState<IDrivers[]>([]);
  const [driversProfiles, setDriversProfiles] = useState<IDriversProfile[]>([]);

  useEffect(() => {
    getDriversRank().then((data) => {
      let tmp = data;
      tmp = tmp.map(
        (el: { Driver: any; wins: any; position: any; points: any }) => ({
          ...el.Driver,
          wins: el.wins,
          position: el.position,
          points: el.points,
        })
      );
      console.log("123", tmp);
      setDrivers(tmp);
    });

    getDriversProfile().then(() => {
      const proflieUrl = profile;
      const profileData = proflieUrl.map((el) => el);
      console.log("456", profileData);
      setDriversProfiles(profileData);
    });
  }, []);

  const mergedData = drivers.map((driver) => {
    const profile = driversProfiles.find((p) => p.nameCode === driver.code);
    return {
      ...driver,
      profile: profile ? profile.driverProfile : "profile not found",
      teamName: profile ? profile.teamName : "team name not found",
    };
  });

  // F1그랑프리는 대회마다 1위부터 10위 선수들에게만 점수(각각 25ㆍ18ㆍ15ㆍ12ㆍ10ㆍ8ㆍ6ㆍ4ㆍ2ㆍ1)를 부여한다.

  async function getDriversRank() {
    const url = "http://ergast.com/api/f1/current/driverStandings.json";
    const response = await axios.get(url);

    const driverData =
      response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

    return driverData;
  }

  async function getDriversProfile() {
    const url = "https://api.openf1.org/v1/drivers?session_key=latest";
    const response = await axios.get(url);

    const driverData = response.data;
    return driverData;
  }
  return (
    <Container className="rank_container">
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
        </h2>
      </div>
      {/* 1 ~ 3 위 */}
      <Row className="mb-3">
        {mergedData.slice(0, 3).map((driver, i) => {
          return (
            <Col md={4} key={i}>
              <Card>
                <Row>
                  <Col md={8}>
                    <Card.Title
                      style={{
                        fontSize: "3rem",
                        padding: "20px 0 0 20px",
                      }}
                    >
                      {driver.position}
                    </Card.Title>
                  </Col>
                  <Col
                    md={4}
                    style={{
                      padding: "20px",
                    }}
                  >
                    <Card.Text>POINTS</Card.Text>
                    <Badge bg="black" text="white">
                      <Card.Title className="mb-0">{driver.points}</Card.Title>
                    </Badge>
                  </Col>
                </Row>
                <Card.Body>
                  <Row>
                    <Card.Text>
                      <span
                        style={{
                          display: "block",
                          borderTop: "1px solid #481f1f",
                          paddingTop: "10px",
                        }}
                      >
                        {driver.givenName}
                      </span>
                    </Card.Text>
                    <Card.Text>
                      <span
                        style={{
                          display: "block",
                          borderBottom: "1px solid #481f1f",
                          paddingBottom: "10px",
                          fontSize: "1.5rem",
                        }}
                      >
                        {driver.familyName}
                      </span>
                    </Card.Text>
                    <Card.Text style={{ color: "#595959", padding: "10px" }}>
                      {driver.teamName}
                    </Card.Text>
                    <Col
                      md={3}
                      style={{
                        position: "relative",
                      }}
                    >
                      <Card.Text
                        style={{
                          fontSize: "2.5rem",
                        }}
                      >
                        {driver.permanentNumber}
                      </Card.Text>
                    </Col>
                    <Col md={9}>
                      <Card.Img
                        variant="top"
                        src={driver.profile}
                        alt={`${driver.profile} image`}
                        style={{
                          width: "12rem",
                          height: "18rem",
                          objectFit: "cover",
                        }}
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      {/* 4 ~ 21 위 */}
      <Row>
        {mergedData.slice(3, 21).map((driver, i) => {
          return (
            <Col md={3} key={i} className="mb-3">
              <Card>
                <Row>
                  <Col md={7}>
                    <Card.Title
                      style={{
                        fontSize: "3rem",
                        padding: "20px 0 0 20px",
                      }}
                    >
                      {driver.position}
                    </Card.Title>
                  </Col>
                  <Col
                    md={5}
                    style={{
                      padding: "20px",
                      textAlign: "center",
                    }}
                  >
                    <Card.Text>POINTS</Card.Text>
                    <Badge bg="black" text="white">
                      <Card.Title className="mb-0">{driver.points}</Card.Title>
                    </Badge>
                  </Col>
                </Row>
                <Card.Body>
                  <Row>
                    <Card.Text>
                      <span
                        style={{
                          display: "block",
                          borderTop: "1px solid #481f1f",
                          paddingTop: "10px",
                        }}
                      >
                        {driver.givenName}
                      </span>
                    </Card.Text>
                    <Card.Text>
                      <span
                        style={{
                          display: "block",
                          borderBottom: "1px solid #481f1f",
                          paddingBottom: "10px",
                          fontSize: "1.5rem",
                        }}
                      >
                        {driver.familyName}
                      </span>
                    </Card.Text>
                    <Card.Text style={{ color: "#595959", padding: "10px" }}>
                      {driver.teamName}
                    </Card.Text>
                    <Col
                      md={3}
                      style={{
                        position: "relative",
                      }}
                    >
                      <Card.Text
                        style={{
                          fontSize: "1.5rem",
                        }}
                      >
                        {driver.permanentNumber}
                      </Card.Text>
                    </Col>
                    <Col md={9}>
                      <Card.Img
                        variant="top"
                        src={driver.profile}
                        alt={`${driver.profile} image`}
                        style={{
                          width: "9rem",
                          height: "17rem",
                          objectFit: "cover",
                        }}
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
