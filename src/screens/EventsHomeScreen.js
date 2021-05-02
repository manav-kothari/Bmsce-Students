import React from "react";
import { Row, Col } from "react-bootstrap";
import EventCardComponent from "../components/EventCardComponent";

import events from "../events";

const EventsHomeScreen = () => {
  return (
    <>
      <h1 className="text-center mt-2">Latest Events</h1>
      <Row>
        {events.map((event) => (
          <Col sm={12} md={6} lg={4} xl={4}>
            <EventCardComponent event={event} />
          </Col>
        ))}
        <Col sm={12} md={6} lg={4} xl={4} className="video-container mt-2">
          <iframe
            allowfullscreen="0"
            allowFullScreen="allowFullScreen"
            frameBorder="0"
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/GAgqRs6s2ck"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          ></iframe>
        </Col>
        <Col>
          <div className="mt-2 mb-2  text-center vt">
            <h5>
              <strong>Interactive Session with Startup Founders</strong>
            </h5>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default EventsHomeScreen;
