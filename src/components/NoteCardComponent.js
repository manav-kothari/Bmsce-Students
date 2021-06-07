import React from "react";
import { Card, Button } from "react-bootstrap";

const NoteCardComponent = ({ note }) => {
  return (
    <>
      <Card
        style={{ background: "#121212", border: "#121212" }}
        className="my-2 p-0 mx-1 note-card rounded cards"
      >
        <a
          style={{ color: "#000" }}
          href={`https://mega.nz/folder/iNhVBIIT#TTe5Yseom0iAm-m01ABl8w`}
        >
          <Card.Img
            className="note-card-img-note embed-responsive-item card border-0"
            variant="top"
            src={note.image}
          />
        </a>
        <Card.Body className="text-center p-2">
          <a
            style={{ color: "#000" }}
            href={`https://mega.nz/folder/iNhVBIIT#TTe5Yseom0iAm-m01ABl8w`}
          >
            <Card.Title>
              <strong style={{ color: "#fff" }} className="text-light">
                {note.name}
              </strong>
            </Card.Title>
          </a>
          <a
            style={{ color: "#000" }}
            href={`https://mega.nz/folder/iNhVBIIT#TTe5Yseom0iAm-m01ABl8w`}
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
