import React from "react";
import CountryCard from "../CountryCard/CountryCard";

import Spinner from "react-bootstrap/Spinner";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCountries } from "../../features/countries/countriesSlice";

import classes from "./Countries.module.css";
import Search from "../Search/Search";

const Countries = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries);
  const searchInput = useSelector((state) => state.countries.search);
  const loading = useSelector((state) => state.countries.isLoading);

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);

  return !loading ? (
    <div className={classes.countryContainer}>
      <div className={classes.search}>
        <Search />
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
    <div className={classes.loading}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Countries;
