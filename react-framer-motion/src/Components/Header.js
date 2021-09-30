import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Navbar>
      <Logo to="/">animals</Logo>
      <NavItems>
        <NavbarLink to="/">home</NavbarLink>
        <NavbarLink to="/about">about</NavbarLink>
        <NavbarLink to="services">services</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

const Navbar = styled.nav`
  height: 60px;
  background: transparent;
  padding: 0rem calc((100vw-1300px) / 2);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled(Link)`
  color: white;
  padding-left: 1rem;
  text-decoration: none;
  text-transform: capitalize;
  font-weight: bold;
  font-style: italic;
  letter-spacing: 0.1rem;
`;
const NavItems = styled.div``;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1rem;
`;
export default Header;
