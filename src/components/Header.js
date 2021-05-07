import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { MdEventNote } from "react-icons/md";
import { RiBookletFill } from "react-icons/ri";
import { HiTrendingUp } from "react-icons/hi";
// import { IoIosChatbubbles } from "react-icons/io";
// import logo from "../images/BMS_College_of_Engineering.svg";

const Header = () => (
  <>
    <Navbar variant="dark" style={{ background: "#000" }}>
      <Navbar.Brand href="/" className="mx-auto">
        {/* <img
          alt="BMS logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "} */}
        BMSCE Students
      </Navbar.Brand>
    </Navbar>

    <Navbar className="m-0 p-1 shadow-sm bg-white " sticky="top" bg="white">
      <Nav className="mx-auto">
        <Nav.Link
          href="/events"
          className="px-3 py-auto nav-link text-danger text-center font-weight-bold"
        >
          <MdEventNote size={20} /> Events
        </Nav.Link>

        <Nav.Link
          href="/updates"
          className="px-3 nav-link text-info text-center font-weight-bold"
        >
          <HiTrendingUp size={20} /> Updates
        </Nav.Link>

        <Nav.Link
          href="/notes"
          className="px-3 nav-link text-success text-center font-weight-bold"
        >
          <RiBookletFill size={20} /> Notes
        </Nav.Link>
        {/* <Nav.Link
          href="https://bmscestudentschat.herokuapp.com/"
          className="px-3 nav-link text-warning text-center font-weight-bold"
        >
          <IoIosChatbubbles size={20} /> Chat
        </Nav.Link> */}
      </Nav>
    </Navbar>
  </>
);

export default Header;
