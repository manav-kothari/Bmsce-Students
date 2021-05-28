import React from "react";
import { Card, Button } from "react-bootstrap";

const NoteCardComponent = ({ note }) => {
  return (
    <>
      <Card className="my-2 p-2 mx-1  rounded cards">
        <a
          style={{ color: "#000" }}
          href={`https://mega.nz/folder/XZ4RDCqa#RVWj2VseNnTlSRsqsCQ1lw`}
        >
          <Card.Img
            className="note-card-img embed-responsive-item"
            variant="top"
            src={note.image}
          />
        </a>
        <Card.Body className="text-center p-2">
          <a
            style={{ color: "#000" }}
            href={`https://mega.nz/folder/XZ4RDCqa#RVWj2VseNnTlSRsqsCQ1lw`}
          >
            <Card.Title>
              <strong style={{ color: "#000" }} className="text-dark">
                {note.name}
              </strong>
            </Card.Title>
          </a>
          <a
            style={{ color: "#000" }}
            href={`https://mega.nz/folder/XZ4RDCqa#RVWj2VseNnTlSRsqsCQ1lw`}
          >
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
