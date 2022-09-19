import React from "react";
import classes from "./CountryCard.module.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  addFavorites,
  removeFavorites,
} from "../../features/countries/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CountryCard = ({ country }) => {
  const dispatch = useDispatch();
  const fav = useSelector((state) => state.favorites.favorites);

  return (
    <Card style={{ width: "24rem", height: "28rem", margin: "1rem" }}>
      <img
        className={classes.flag}
        src={country.flags.svg}
        alt={country.name.common}
      />
      <Card.Header style={{ color: "black", padding: "1.2rem" }}>
        <h2 className={classes.name}>{country.name.common}</h2>
        <h3 className={classes.officialName}>{country.name.official}</h3>
      </Card.Header>
      <Card.Body style={{ color: "black" }}>
        <div className={classes.parts}>
          <p className="pr-3">Language(s): </p>
          <div>
            {Object.values(country.languages || {}).map((value, i) => (
              <span key={i}>{(i ? ", " : "") + value}</span>
            ))}
          </div>
        </div>
        <div className={classes.parts}>
          <p className="pr-3">Currency: </p>
          <div>
            {Object.values(country.currencies || {}).map((value, i) => (
              <span key={i}>{(i ? ", " : "") + value.name}</span>
            ))}
          </div>
        </div>
        <div className={classes.parts}>
          <p className="pr-3">Population: </p>
          <div>{country.population}</div>
        </div>
        <Link to={`/countries/${country.name.common}`} state={country}>
          <Button variant="secondary">Read more</Button>{" "}
        </Link>
        <div className={classes.addFavorite}>
          {fav.some((item) => item.name.common === country.name.common) ? (
            <Button
              variant="info"
              onClick={() => dispatch(removeFavorites(country))}
            >
              Remove from favorites
            </Button>
          ) : (
            <Button
              className={classes.button}
              variant="info"
              onClick={() => dispatch(addFavorites(country))}
            >
              Add to favorites
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
