import React from "react";
import { Row, Col } from "react-bootstrap";
import UpdateCardComponent from "../components/UpdateCardComponent";

import updates from "../updates";

const UpdatesHomeScreen = () => {
  return (
    <>
      <h1 className="text-center mt-2">Latest Updates</h1>
      <Row>
        {updates.map((update) => (
          <Col sm={12} md={6} lg={4} xl={4}>
            <UpdateCardComponent update={update} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default UpdatesHomeScreen;
