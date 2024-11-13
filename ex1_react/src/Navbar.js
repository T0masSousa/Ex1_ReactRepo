import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { FaClipboardCheck } from "react-icons/fa";
import { MdOutlineAtm } from "react-icons/md";
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
        <NavbarItem className={location.pathname === '/' ? 'active' : ''}>
          <NavbarLink to="/"><FaHouse /> Home</NavbarLink>
        </NavbarItem>
        <NavbarItem className={location.pathname === '/Ex1' ? 'active' : ''}>
          <NavbarLink to="/Ex1"><FaClipboardCheck /> EX1 - Tasks</NavbarLink>
        </NavbarItem>
        <NavbarItem className={location.pathname === '/Ex2' ? 'active' : ''}>
          <NavbarLink to="/Ex2"><FaClipboardCheck /> EX2 - Tasks</NavbarLink>
        </NavbarItem>
        <NavbarItem className={location.pathname === '/Ex3' ? 'active' : ''}>
          <NavbarLink to="/Ex3"><MdOutlineAtm /> EX3 - ATM</NavbarLink>
        </NavbarItem>
      </NavbarList>
    </NavbarContainer>
  );
}

Navbar.propTypes = {
  location: PropTypes.object,
};

export default Navbar;