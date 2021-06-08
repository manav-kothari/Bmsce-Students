import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

const UpdatesHomeScreen = () => {
  return (
    <>
      <h1 className="text-center mt- heading">Latest Updates</h1>
      <Row>
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card className="my-2 p-2 mx-2  rounded cards">
            <Card.Body className="text-center p-2">
              <a
                style={{ color: "#000" }}
                href={`https://drive.google.com/file/d/1hZhCrdLmiSd4hxOUFCwX1nF9jvR5mLT_/view?usp=sharing`}
              >
                <Card.Title>
                  <strong style={{ color: "#000" }} className="text-dark">
                    Consolidated Calendar of Events for the Even Sem for UG and
                    PG programs AY 2020-21
                  </strong>
                </Card.Title>
              </a>
              <a
                style={{ color: "#000" }}
                href={`https://drive.google.com/file/d/1hZhCrdLmiSd4hxOUFCwX1nF9jvR5mLT_/view?usp=sharing`}
              >
                <Button
                  style={{ backgroundColor: "#000" }}
                  className="text-capitalize btn-block custom-btn"
                >
                  Read More
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>

        {/****************************************************************************************************/}

        <Col sm={12} md={6} lg={4} xl={4}>
          <Card className="my-2 p-2 mx-2  rounded cards">
            <Card.Body className="text-center p-2">
              <a style={{ color: "#000" }} href={`/update/2`}>
                <Card.Title>
                  <strong style={{ color: "#000" }} className="text-dark">
                    edX is back at BMSCE
                  </strong>
                </Card.Title>
              </a>
              <a style={{ color: "#000" }} href={`/update/2`}>
                <Button
                  style={{ backgroundColor: "#000" }}
                  className="text-capitalize btn-block custom-btn"
                >
                  Read More
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>

        {/****************************************************************************************************/}
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card className="my-2 p-2 mx-2  rounded cards">
            <Card.Body className="text-center p-2">
              <a style={{ color: "#000" }} href={`/update/1`}>
                <Card.Title>
                  <strong style={{ color: "#000" }} className="text-dark">
                    Coursera is back at BMSCE
                  </strong>
                </Card.Title>
              </a>
              <a style={{ color: "#000" }} href={`/update/1`}>
                <Button
                  style={{ backgroundColor: "#000" }}
                  className="text-capitalize btn-block custom-btn"
                >
                  Read More
                </Button>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default UpdatesHomeScreen;
