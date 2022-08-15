import React from "react";
import classes from "./CountryCard.module.css";

const CountryCard = ({
  name,
  official,
  languages,
  currencies,
  population,
  flag,
}) => {
  return (
    <div className={classes.card}>
      <img className="card_flag" src={flag} alt={name} />
      <div>
        <div>Language(s)</div>
        <div>
          {Object.values(languages || {}).map((value, i) => (
            <span key={i}>{(i ? ", " : "") + value}</span>
          ))}
        </div>
      </div>
      <div>
        <div>Currency(s)</div>
        <div>
          {Object.values(currencies || {}).map((value, i) => (
            <span key={i}>{(i ? ", " : "") + value.name} </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
