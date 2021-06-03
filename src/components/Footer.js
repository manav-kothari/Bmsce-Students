import React from "react";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="text-center mx-auto">
      <div>
        <small>Contact Us: </small>
        <GrMail className="text center" />{" "}
        <a
          className="text-dark text-center"
          href="mailto:bmscestudents@gmail.com"
        >
          <small>bmscestudents@gmail.com</small>
        </a>
      </div>

      <div className="text-center h6">
        <span>Developed & Maintained by Manav Kothari</span>

        {/* <small>Copyright &copy; BMSCE Students</small> */}
      </div>
    </footer>
  );
};

export default Footer;
