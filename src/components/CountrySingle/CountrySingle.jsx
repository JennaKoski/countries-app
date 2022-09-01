import classes from "./CountrySingle.module.css";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

const CountrySingle = () => {
  const location = useLocation();
  const country = location.state;
  console.log(country);

  return (
    <Card
      className={classes.single}
      style={{ width: "40rem", height: "20rem", margin: "1rem" }}
    >
      {/* <img className={classes.flag} src={flag} alt={name} /> */}
      <Card.Header style={{ color: "black" }}>
        <h2>{country.name.common}</h2>
        <h3 className={classes.officialName}>{country.name.official}</h3>
      </Card.Header>
      <Card.Body style={{ color: "black" }}>
        <div>
          <p>Capital: {country.capital}</p>
          <div>
            Language(s):
            {Object.values(country.languages || {}).map((value, i) => (
              <span key={i}>{(i ? ", " : "") + value}</span>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CountrySingle;
