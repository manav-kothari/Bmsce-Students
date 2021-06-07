import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import events from "../events";

const EventScreen = ({ match }) => {
  const event = events.find((e) => e._id === match.params.id);
  return (
    <div className="event-detail">
      <Link
        to={`/events`}
        style={{ backgroundColor: "#fff" }}
        className="btn btn-lg btn-light my-3 mx-3"
      >
        GO BACK
      </Link>

      <div>
        <Image
          className="eventphoto rounded mx-auto mx-center d-block"
          src={event.image}
          alt={event.name}
        />
      </div>
      <div className="p-4 text-center text-light">{event.message}</div>
    </div>
  );
};

export default EventScreen;
