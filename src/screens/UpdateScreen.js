import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import updates from "../updates";

const UpdateScreen = ({ match }) => {
  const update = updates.find((e) => e._id === match.params.id);
  return (
    <div className="page">
      <Link
        to={`/updates`}
        style={{ backgroundColor: "#000" }}
        className="btn btn-lg btn-dark my-3 mx-3"
      >
        GO BACK
      </Link>

      <div>
        <Image
          className="updatephoto rounded mx-auto mx-center d-block"
          src={update.image}
          alt={update.title}
        />
      </div>
      <div className="p-4 text-center text-light">{update.description}</div>
    </div>
  );
};

export default UpdateScreen;
