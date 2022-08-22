import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  return (
    <Nav>
      <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/countries">
        <Nav.Link>Countries</Nav.Link>
      </LinkContainer>
    </Nav>
  );
};

export default Navigation;
