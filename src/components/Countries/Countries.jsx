import React from "react";
import CountryCard from "../CountryCard/CountryCard";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../../features/countries/countriesSlice";
import { initializeCountries } from "../../features/countries/countriesSlice";

import classes from "./Countries.module.css";

const Countries = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries);
  const searchInput = useSelector((state) => state.countries.search);
  const loading = useSelector((state) => state.countries.isLoading);

  const searchCountries = (e) => {
    dispatch(search(e.target.value));
  };

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);

  return !loading ? (
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
        {countriesList
          .filter((country) => {
            if (searchInput === "") {
              return country;
            }
            return country.name.common
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          })
          .map((country) => {
            return (
              <CountryCard key={country.name.official} country={country} />
            );
          })}
      </div>
    </div>
  ) : (
    "Loading"
  );
};

export default Countries;
