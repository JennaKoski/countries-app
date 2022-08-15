import React from "react";
import classes from "./Header.module.css";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <Nav />
      </header>
    </>
  );
};

export default Header;
