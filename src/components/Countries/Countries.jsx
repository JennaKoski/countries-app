import React from "react";
import CountryCard from "../CountryCard/CountryCard";

import Spinner from "react-bootstrap/Spinner";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeCountries } from "../../features/countries/countriesSlice";

import classes from "./Countries.module.css";
import Search from "../Search/Search";
import { useState } from "react";

const Countries = () => {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries);
  const searchInput = useSelector((state) => state.countries.search);
  const loading = useSelector((state) => state.countries.isLoading);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    dispatch(initializeCountries());
  }, [dispatch]);

  const scrollVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setScroll(true);
    } else if (scrolled <= 300) {
      setScroll(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  window.addEventListener("scroll", scrollVisible);

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
      {scroll && (
        <button className={classes.backToTop} onClick={backToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            class="bi bi-arrow-up-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
          </svg>
        </button>
      )}
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
