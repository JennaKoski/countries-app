import React from "react";
// import classes from "./Header.module.css";
import Navigation from "../Nav/Nav";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Navigation />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
