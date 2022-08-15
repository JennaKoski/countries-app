import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <ul className={classes.navlist}>
        <li className={classes.links}>
          <Link to="/">HOME</Link>
        </li>
        <li className={classes.links}>
          <Link to="/countries">COUNTRIES</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
