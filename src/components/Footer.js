import React from "react";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="text-center mx-auto">
      <div>
        <span>Contact Us: </span>
        <GrMail className="text center" />{" "}
        <a
          className="text-dark text-center"
          href="https://mail.google.com/mail/u/?authuser=bmscestudents@gmail.com"
        >
          bmscestudents@gmail.com
        </a>
      </div>

      <div className="text-center h6">
        <small>Copyright &copy; BMSCE Students</small>
      </div>
    </footer>
  );
};

export default Footer;
