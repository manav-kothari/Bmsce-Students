// import styled from "styled-components";
import { Link as LinkR, NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";

// export const Nav = styled.nav`
//   background: #000;
//   height: 70px;
//   margin-top: -70px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 1rem;
//   position: sticky;
//   top: 0;
//   z-index: 10;

//   @media screen and (max-width: 960px) {
//     transition: 0.8s all ease;
//   }
// `;

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0.5rem calc((100vw - 1000px) / 2); */
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  z-index: 0;
  width: 100%;
  max-width: 1500px;
`;

export const NavLogo = styled(LinkR)`
  /* color: #01bf71; */
  justify-self: flex-start;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;

  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #5271ff,
    0 0 82px #5271ff, 0 0 92px #5271ff, 0 0 102px #5271ff, 0 0 151px #5271ff;
  background-color: #010a01;
  font-weight: 400;
  font-family: "Times New Roman";
  animation: flicker 3s infinite alternate;
  color: #fff;
  padding: 0 25px;

  /* Flickering animation */
  @keyframes flicker {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 40px #0fa, 0 0 80px #0fa;
    }

    20%,
    24%,
    55% {
      text-shadow: none;
    }
  }

  @media screen and (max-width: 768px) {
    animation: flickermobile 3s infinite alternate;
    padding: 0 15px;
  }

  @keyframes flickermobile {
    0%,
    18%,
    22%,
    25%,
    53%,
    57%,
    100% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 40px #0fa;
    }

    20%,
    24%,
    55% {
      text-shadow: none;
    }
  }
  &:hover {
    transition: all 0.1s ease-in-out;
    background: #000;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;

    background-color: #010a01;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

// export const NavLinks = styled(Link)`
//   color: #fff;
//   display: flex;
//   align-items: center;
//   text-decoration: none;
//   padding: 0 1rem;
//   height: 100%;
//   cursor: pointer;
//   margin-top: 2px;
//   margin-left: 15px;
//   margin-right: 15px;
//   font-size: 1.3rem;

//   &:hover {
//     transition: all 0.1s ease-in-out;
//     background: #000;
//     color: #fff;
//   }

//   &.active {
//     color: #15cdfc;
//   }
// `;

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.3rem;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 2px;
  font-weight: bold;

  &:hover {
    transition: all 0.1s ease-in-out;
    background: #000;
    color: #01bf71;
    text-decoration: none;
  }

  &.active {
    color: #15cdfc;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
// export const NavMenu = styled.div`
//   display: flex;
//   align-items: center;
//   list-style: none;
//   text-align: center;

//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// `;

// export const NavItem = styled.li`
//   height: 70px;
// `;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: #07cff6;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin: 0 25px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
