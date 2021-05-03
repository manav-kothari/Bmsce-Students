import React from "react";

const ComingSoon = () => {
  return (
    <>
      {" "}
      <div className="aler alert-info text-center blink_me p-3 my-5 text-capitalize h1 text-dark">
        Notes Coming Soon...
      </div>
      <div className="p-4 text-center">
        If you are having any notes or links related to your course then kindly{" "}
        <a href="https://www.instagram.com/bmscestudents/">
          <button className="btn-danger">DM</button>
        </a>{" "}
        us or mail us at: <p className="text-info">bmscestudents@gmail.com</p>
      </div>
    </>
  );
};

export default ComingSoon;
