import React from "react";
import { Row, Col } from "react-bootstrap";
import NoteCardComponent from "../components/NoteCardComponent";

import notes from "../notes";

const NotesScreen = () => {
  return (
    <>
      <h1 className="text-center mt-2">Notes</h1>
      <Row>
        {notes.map((note) => (
          <Col sm={12} md={6} lg={4} xl={4}>
            <NoteCardComponent note={note} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default NotesScreen;
