import React from "react";
import { Row, Col } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

const UpdatesHomeScreen = () => {
  return (
    <>
      <h1 className="text-center mt-2">Latest Updates</h1>
      <Row>
        <Col sm={12} md={6} lg={4} xl={4}>
          <Card className="my-2 p-2 mx-2  rounded cards">
            <Card.Body className="text-center p-2">
              <a style={{ color: "#000" }} href={`/update/4`}>
                <Card.Title>
                  <strong style={{ color: "#000" }} className="text-dark">
                    Hacking Club has decided to make a to make a Proper
                    fully-fledged Hacking Cell consisting of Max 10 folks.
                  </strong>
                </Card.Title>
              </a>
              <a style={{ color: "#000" }} href={`/update/4`}>
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
              <a style={{ color: "#000" }} href={`/update/3`}>
                <Card.Title>
                  <strong style={{ color: "#000" }} className="text-dark">
                    Activity points to be earned by the students is reduced
                  </strong>
                </Card.Title>
              </a>
              <a style={{ color: "#000" }} href={`/update/3`}>
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
              <a
                style={{ color: "#000" }}
                href={`https://bmsce.ac.in/website_notifications/II_Semester_B_E__classes_Time_Table_w_e__f_28th_April_2021.pdf`}
              >
                <Card.Title>
                  <strong style={{ color: "#000" }} className="text-dark">
                    II Semester B.E. classes Time Table will effect from 28th
                    April 2021
                  </strong>
                </Card.Title>
              </a>
              <a
                style={{ color: "#000" }}
                href={`https://bmsce.ac.in/website_notifications/II_Semester_B_E__classes_Time_Table_w_e__f_28th_April_2021.pdf`}
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
                    Re-Registration Circular for 1st year
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
      </Row>
    </>
  );
};

export default UpdatesHomeScreen;
