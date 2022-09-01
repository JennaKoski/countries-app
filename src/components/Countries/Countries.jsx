import React from "react";
import classes from "./Countries.module.css";
import { useState } from "react";
import CountryCard from "../CountryCard/CountryCard";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Countries = ({ countries }) => {
  const [search, setSearch] = useState("");

  const searchCountries = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className={classes.search}>
        <InputGroup className="mb-3" style={{ width: "70%" }}>
          <InputGroup.Text id="inputGroup-sizing-default">
            Search
          </InputGroup.Text>
          <Form.Control
            onChange={searchCountries}
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </div>
      <div className={classes.countries}>
        {countries
          .filter((country) => {
            if (search === "") {
              return country;
            }
            return country.name.common
              .toLowerCase()
              .includes(search.toLowerCase());
          })
          .map((country) => {
            return (
              <CountryCard
                key={country.name.official}
                country={country}
                // flag={country.flags.svg}
                // name={country.name.common}
                // official={country.name.official}
                // languages={country.languages}
                // currencies={country.currencies}
                // population={country.population}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Countries;
