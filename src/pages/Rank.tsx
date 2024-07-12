import { useEffect, useState } from "react";
import { Row, Col, Card, Container, Badge } from "react-bootstrap";
import profile from "../lib/driverProfile";
import { dummyDrivers } from "../lib/dummyProfile";
import { teamInfo } from "../lib/dummyTeamInfo";

// interface IDrivers {
//   code: string;
//   dateOfBirth: string;
//   driverId: string;
//   familyName: string;
//   givenName: string;
//   nationality: string;
//   permanentNumber: string;
//   url: string;
//   points: string;
//   position: string;
//   positionText: string;
//   wins: string;
// }

interface IDriversProfile {
  position: string;
  points: string;
  teamName: string;
  driverName: string;
  driverProfile: string;
  teamColor: string;
  nameCode: string;
  teamLogo: string;
  nation: string;
  number: string;
}

interface dummyData {
  position: string;
  namecode: string;
  name: string;
  points: string;
  country: string;
  team: string;
  dateOfBirth: string;
  firstName: string;
  lastName: string;
}

export default function Rank() {
  //const [drivers, setDrivers] = useState<IDrivers[]>([]);
  const [drivers, setDrivers] = useState<dummyData[]>([]);
  const [driversProfiles, setDriversProfiles] = useState<IDriversProfile[]>([]);

  useEffect(() => {
    setDrivers(dummyDrivers);

    getDriversProfile().then(() => {
      const proflieUrl = profile;
      const profileData = proflieUrl.map((el) => el);
      setDriversProfiles(profileData);
    });
  }, []);

  const mergedData = drivers.map((driver) => {
    const profile = driversProfiles.find((p) => p.nameCode === driver.namecode);
    return {
      lastName: profile ? driver.lastName : "last name not found",
      firstName: profile ? driver.firstName : "first name not found",
      points: profile ? profile.points : "points not found",
      position: profile ? profile.position : "position not found",
      profile: profile ? profile.driverProfile : "profile not found",
      teamName: profile ? profile.teamName : "team name not found",
      teamColor: profile ? profile.teamColor : "#000",
      teamLogo: profile ? profile.teamLogo : "team logo not found",
      nation: profile ? profile.nation : "nation not found",
      number: profile ? profile.number : "number not found",
    };
  });

  // F1그랑프리는 대회마다 1위부터 10위 선수들에게만 점수(각각 25ㆍ18ㆍ15ㆍ12ㆍ10ㆍ8ㆍ6ㆍ4ㆍ2ㆍ1)를 부여한다.

  async function getDriversProfile() {
    //const url = "https://api.openf1.org/v1/drivers?session_key=latest";
    //const response = await axios.get(url);

    const driverData = teamInfo;

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
      <Row>
        {mergedData
          .sort((a, b) => parseInt(a.position) - parseInt(b.position))
          .slice(0, 3)
          .map((driver, i) => {
            return (
              <Col md={4} key={i}>
                <Card
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    borderWidth: "2px",
                    borderColor: driver.teamColor,
                  }}
                >
                  <Row>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
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
                          padding: "10px",
                          textAlign: "right",
                        }}
                      >
                        <Card.Text>POINTS</Card.Text>
                        <Badge bg="black" text="white">
                          <Card.Title className="mb-0">
                            {driver.points}
                          </Card.Title>
                        </Badge>
                      </Col>
                    </div>
                  </Row>

                  {/* 선수 이름 */}
                  <Card.Body>
                    <Row>
                      <Card.Text>
                        <span
                          style={{
                            display: "block",
                            borderTop: "1px solid #000",
                            paddingTop: "10px",
                          }}
                        >
                          {driver.firstName}
                        </span>
                      </Card.Text>
                      <Card.Text>
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: "1px solid #000",
                            paddingBottom: "10px",
                            fontSize: "1.5rem",
                          }}
                        >
                          <span>{driver.lastName}</span>
                          <Card.Img
                            src={driver.nation}
                            style={{
                              width: "48px",
                              height: "30px",
                              border: "1px solid #000",
                            }}
                          />
                        </span>
                      </Card.Text>
                      <Card.Text style={{ color: "#595959", padding: "10px" }}>
                        {driver.teamName}
                      </Card.Text>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          position: "relative",
                        }}
                      >
                        <Col md={3}>
                          <Card.Text
                            style={{
                              fontSize: "2.5rem",
                              position: "absolute",
                              bottom: "0",
                            }}
                          >
                            <span
                              style={{ display: "block", fontSize: "1rem" }}
                            >
                              No.
                            </span>
                            <Card.Img
                              src={driver.number}
                              style={{
                                width: "80px",
                                height: "128px",
                              }}
                            />
                          </Card.Text>
                        </Col>
                        <Col
                          md={9}
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              width: "12rem",
                              height: "18rem",
                            }}
                          >
                            <Card.Img
                              variant="top"
                              src={driver.profile}
                              alt={`${driver.profile} image`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                position: "relative",
                                zIndex: 1,
                              }}
                            />
                            <div
                              style={{
                                backgroundImage: `url(${driver.teamLogo})`,
                                width: "100%",
                                height: "70%",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                opacity: 0.5,
                                zIndex: 0,
                              }}
                            ></div>
                          </div>
                        </Col>
                      </div>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
      {/* 4 ~ 21 위 */}
      <Row>
        {mergedData
          .sort((a, b) => parseInt(a.position) - parseInt(b.position))
          .slice(3, 21)
          .map((driver, i) => {
            return (
              <Col md={4} lg={3} sm={6} key={i}>
                <Card
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    borderWidth: "2px",
                    borderColor: driver.teamColor,
                  }}
                >
                  <Row>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
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
                          textAlign: "right",
                          padding: "10px",
                        }}
                      >
                        <Card.Text>POINTS</Card.Text>
                        <Badge
                          bg="black"
                          text="white"
                          style={{
                            textAlign: "right",
                            width: "70%",
                          }}
                        >
                          <Card.Title className="mb-0 text-center">
                            {driver.points}
                          </Card.Title>
                        </Badge>
                      </Col>
                    </div>
                  </Row>

                  {/* 선수 이름 */}
                  <Card.Body>
                    <Row>
                      <Card.Text>
                        <span
                          style={{
                            display: "block",
                            borderTop: "1px solid #000",
                            paddingTop: "10px",
                          }}
                        >
                          {driver.lastName}
                        </span>
                      </Card.Text>
                      <Card.Text>
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            borderBottom: "1px solid #000",
                            paddingBottom: "10px",
                            fontSize: "1.5rem",
                          }}
                        >
                          <span>{driver.firstName}</span>
                          <Card.Img
                            src={driver.nation}
                            style={{
                              width: "48px",
                              height: "30px",
                              border: "1px solid #000",
                            }}
                          />
                        </span>
                      </Card.Text>
                      <Card.Text style={{ color: "#595959", padding: "10px" }}>
                        {driver.teamName}
                      </Card.Text>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          position: "relative",
                        }}
                      >
                        <Col md={3}>
                          <Card.Text
                            style={{
                              fontSize: "2.5rem",
                              position: "absolute",
                              bottom: "0",
                            }}
                          >
                            <span
                              style={{ display: "block", fontSize: "1rem" }}
                            >
                              No.
                            </span>
                            <Card.Img
                              src={driver.number}
                              style={{
                                width: "60px",
                                height: "100px",
                              }}
                            />
                          </Card.Text>
                        </Col>
                        <Col
                          md={9}
                          style={{
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              width: "12rem",
                              height: "18rem",
                            }}
                          >
                            <Card.Img
                              variant="top"
                              src={driver.profile}
                              alt={`${driver.profile} image`}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                position: "relative",
                                zIndex: 1,
                              }}
                            />
                            <div
                              style={{
                                backgroundImage: `url(${driver.teamLogo})`,
                                width: "100%",
                                height: "70%",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                opacity: 0.5, // 투명도 조절
                                zIndex: 0,
                              }}
                            ></div>
                          </div>
                        </Col>
                      </div>
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
