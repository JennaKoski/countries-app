import React from "react";
import classes from "./CountryCard.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const CountryCard = ({
  name,
  official,
  languages,
  currencies,
  population,
  flag,
}) => {
  return (
    <Card style={{ width: "22rem", margin: "1rem" }}>
      <img className={classes.flag} src={flag} alt={name} />
      <Card.Header style={{ color: "black" }}>
        <Link to={`/countries/${name}`}>
          <h2>{name}</h2>
        </Link>
        <h3 className={classes.officialName}>{official}</h3>
      </Card.Header>
      <Card.Body style={{ color: "black" }}>
        <div className={classes.parts}>
          <div className="pr-3">Language(s): </div>
          <div>
            {Object.values(languages || {}).map((value, i) => (
              <span key={i}>{(i ? ", " : "") + value}</span>
            ))}
          </div>
        </div>
        <div className={classes.parts}>
          <p className="pr-3">Currency: </p>
          <div>
            {Object.values(currencies || {}).map((value, i) => (
              <span key={i}>{(i ? ", " : "") + value.name}</span>
            ))}
          </div>
        </div>
        <div className={classes.parts}>
          <div className="pr-3">Population: </div>
          <div>{population}</div>
        </div>
        <Link to={`/countries/${name}`}>
          <Button variant="dark">Read more</Button>{" "}
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
