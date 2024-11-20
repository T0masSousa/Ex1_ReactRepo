import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHouse } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import { MdOutlineAtm } from "react-icons/md";
import { FaCat } from "react-icons/fa6";
import styled from "styled-components";
import PropTypes from "prop-types";

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 2rem;
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;
`;

const NavbarItem = styled.li`
  &.active {
    font-weight: bold;
  }
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

function Navbar() {
  const location = useLocation();

  return (
    <NavbarContainer>
      <NavbarList>
        <NavbarItem className={location.pathname === "/" ? "active" : ""}>
          <NavbarLink to="/">
            <FaHouse /> Home
          </NavbarLink>
        </NavbarItem>
        <NavbarItem className={location.pathname === "/Ex1" ? "active" : ""}>
          <NavbarLink to="/Ex1">
            <FaClipboardCheck />
            Tasks 1
          </NavbarLink>
        </NavbarItem>
        <NavbarItem className={location.pathname === "/Ex2" ? "active" : ""}>
          <NavbarLink to="/Ex2">
            <FaClipboardCheck />
            Tasks 2
          </NavbarLink>
        </NavbarItem>
        <NavbarItem className={location.pathname === "/Ex3" ? "active" : ""}>
          <NavbarLink to="/Ex3">
            <MdOutlineAtm />
            ATM
          </NavbarLink>
        </NavbarItem>
        <NavbarItem className={location.pathname === "/Ex4" ? "active" : ""}>
          <NavbarLink to="/Ex4">
            <FaCat /> CAT API 1
          </NavbarLink>
        </NavbarItem>
        <NavbarItem className={location.pathname === "/Ex5" ? "active" : ""}>
          <NavbarLink to="/Ex5">
            <FaCat />
            CAT API 2
          </NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  location: PropTypes.object,
};

export default Navbar;
