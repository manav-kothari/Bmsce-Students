import React from "react";
import { Card, Button } from "react-bootstrap";

const NoteCardComponent = ({ note }) => {
  return (
    <>
      <Card className="my-2 p-2 mx-2  rounded cards">
        <a style={{ color: "#000" }} href={`/comingsoon`}>
          <Card.Img
            className="note-card-img-top embed-responsive-item"
            variant="top"
            src={note.image}
          />
        </a>
        <Card.Body className="text-center p-2">
          <a style={{ color: "#000" }} href={`/comingsoon`}>
            <Card.Title>
              <strong style={{ color: "#000" }} className="text-dark">
                {note.name}
              </strong>
            </Card.Title>
          </a>
          <a style={{ color: "#000" }} href={`/comingsoon`}>
            <Button
              style={{ backgroundColor: "#000" }}
              className="text-capitalize btn-block custom-btn"
            >
              Get Notes
            </Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default NoteCardComponent;
