import React from "react";
import classes from "./Favorites.module.css";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import CountryCard from "../CountryCard/CountryCard";

const Favorites = () => {
  const searchInput = useSelector((state) => state.countries.search);
  const favList = useSelector((state) => state.favorites.favorites);

  return (
    <div>
      <div className={classes.search}>
        <Search />
      </div>
      <div className={classes.favorites}>
        {favList
          .filter((country) => {
            if (searchInput === "") {
              return country;
            }
            return country.name.common
              .toLowerCase()
              .includes(searchInput.toLowerCase());
          })
          .map((country) => {
            return <CountryCard key={country.name.common} country={country} />;
          })}
      </div>
    </div>
  );
};

export default Favorites;
