import React from "react";
import classes from "./Countries.module.css";
import { useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import axios from "axios";
import { useEffect } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  console.log(countries);

  const searchCountries = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <div className={classes.search}>
        <input
          className={classes.search_input}
          placeholder="Search"
          onChange={searchCountries}
        />
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
                flag={country.flags.svg}
                name={country.name.common}
                official={country.name.official}
                languages={country.languages}
                currencies={country.currencies}
                population={country.population}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Countries;
