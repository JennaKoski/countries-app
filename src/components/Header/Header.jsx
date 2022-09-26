import React from "react";
import Navigation from "../Nav/Nav";
import Container from "react-bootstrap/Container";
import classes from "./Header.module.css";

import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className={classes.header}>
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
