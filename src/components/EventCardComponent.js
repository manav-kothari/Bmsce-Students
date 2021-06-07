import React from "react";

const CardComponent = ({ event }) => {
  return (
    <>
      <div
        class="event-card"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div class="event-card-body">
          <h2 class="event-card-title">{event.name}</h2>
          <p>{event.description}</p>
          <a href={`/event/${event._id}`} class="button">
            Get Details
          </a>
        </div>
      </div>

      {/* <Card className="my-2 p-2 mx-2  rounded cards">
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
      </Card> */}
    </>
  );
};

export default CardComponent;
