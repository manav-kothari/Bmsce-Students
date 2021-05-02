import React from "react";
import { Card, Button } from "react-bootstrap";

const CardComponent = ({ event }) => {
  return (
    <>
      <Card className="my-2 p-2 mx-2  rounded cards">
        <a style={{ color: "#000" }} href={`/event/${event._id}`}>
          <Card.Img
            className="card-img-top embed-responsive-item"
            variant="top"
            src={event.image}
          />
        </a>
        <Card.Body className="text-center p-2">
          <a style={{ color: "#000" }} href={`/event/${event._id}`}>
            <Card.Title>
              <strong style={{ color: "#000" }} className="text-dark">
                {event.name}
              </strong>
            </Card.Title>
          </a>
          <a style={{ color: "#000" }} href={`/event/${event._id}`}>
            <Button
              style={{ backgroundColor: "#000" }}
              className="text-capitalize btn-block custom-btn"
            >
              Get Details
            </Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardComponent;
