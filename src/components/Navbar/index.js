import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  MobileIcon,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">BMSCE Students</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="events">Events</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="updates">Updates</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="notes">Notes</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="resources">Resources</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
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
