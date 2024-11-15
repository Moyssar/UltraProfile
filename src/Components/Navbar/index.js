import React from "react";
// import { NavLink } from "react-router-dom";
import {
  NavbarSection,
  LogoText,
  UlList,
  ListItem,
  Anchor,
  MyNavLink,
} from "./Navbar.js";

const Navbar = () => {
  return (
    <div className="container">
      <NavbarSection>
        <LogoText>UItra Profile</LogoText>
        <UlList>
          <ListItem>
            <MyNavLink className="nav-link" to="/">
              Home
            </MyNavLink>
          </ListItem>
          <ListItem>
            <Anchor href="#work">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#portfolio">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#resume">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#about">About</Anchor>
          </ListItem>
          <ListItem>
            <MyNavLink className="nav-link" to="/contact">
              Contact
            </MyNavLink>
          </ListItem>
        </UlList>
      </NavbarSection>
    </div>
  );
};

export default Navbar;
