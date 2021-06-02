import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to="/events">
            Events
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/updates">
            Updates
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/notes">
            Notes
          </SidebarLink>
          <SidebarLink onClick={toggle} to="/comingsoon">
            Resources
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute target="_blank" to="//bmsce.ac.in/">
            BMSCE
          </SidebarRoute>
        </SideBtnWrap>
        <SideBtnWrap>
          <SidebarRoute target="_blank" to="//webcampus.bmsce.in/">
            CAMPUS
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
