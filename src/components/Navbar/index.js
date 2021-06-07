import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  MobileIcon,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav className="position-sticky">
        <NavbarContainer>
          <NavLogo to="/">BMSCE Students</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavLinks to="/events" className="nav-link" activeStyle>
              Events
            </NavLinks>

            <NavLinks to="/updates" activeStyle>
              Updates
            </NavLinks>

            <NavLinks to="/notes" activeStyle>
              Notes
            </NavLinks>

            <NavLinks to="/comingsoon" activeStyle>
              Resources
            </NavLinks>
          </NavMenu>
          <NavBtn className="btn-glow">
            <NavBtnLink target="_blank" to="//bmsce.ac.in/">
              BMSCE
            </NavBtnLink>

            <NavBtnLink target="_blank" to="//webcampus.bmsce.in/">
              CAMPUS
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
