import React from "react";

const CardComponent = ({ event }) => {
  return (
    <>
      <div
        className="event-card text-center"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="event-card-body ">
          <h3 className="event-card-title ">{event.name}</h3>
          <p>{event.description}</p>
          <span className="text-center">
            {" "}
            <a
              href={`/event/${event._id}`}
              className="button text-center mx-auto"
            >
              Get Details
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
