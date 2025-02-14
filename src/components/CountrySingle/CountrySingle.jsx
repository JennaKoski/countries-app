import classes from "./CountrySingle.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/esm/Button";
import millify from "millify";

const CountrySingle = () => {
  const location = useLocation();
  const country = location.state;
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const api_key = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country?.name?.common}&units=metric&appid=${api_key}`
      )
      .catch((error) => console.log(error))
      .then((res) => {
        setWeather(res.data);
        setLoading(false);
      });
    // eslint-disable-next-line
  }, []);

  return !loading ? (
    <div className={classes.singleContainer}>
      <Card
        className={classes.single}
        style={{ width: "50rem", height: "40rem", margin: "1rem" }}
      >
        <img
          className={classes.flag}
          src={country.flags.svg}
          alt={country.name.common}
        />
        <Card.Header
          className={classes.singleHeader}
          style={{ color: "black" }}
        >
          <h2>{country.name.common}</h2>
          <h3 className={classes.officialName}>{country.name.official}</h3>
        </Card.Header>
        <Card.Body style={{ color: "black" }}>
          <div>
            <p>Capital: {country.capital}</p>
            <p>
              Language(s):{" "}
              {Object.values(country.languages || {}).map((value, i) => (
                <span key={i}>{(i ? ", " : "") + value}</span>
              ))}
            </p>
            <div className={classes.parts}>
              <p>
                Currency:{" "}
                {Object.values(country.currencies || {}).map((value, i) => (
                  <span key={i}>{(i ? ", " : "") + value.name}</span>
                ))}
              </p>
            </div>
            <div className={classes.parts}>
              <p>Population: {millify(country.population)}</p>
            </div>
          </div>
          <div className={classes.weather}>
            <h3>Current weather in {weather?.name}:</h3>
            <p>Temperature: {weather?.main?.temp} °C</p>
            <p>Wind: {weather?.wind?.speed} m/s</p>
            <p>Description: {weather?.weather[0]?.description}</p>
            <img
              className={classes.icon}
              src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
              alt="weather icon"
            />
          </div>
          <Link to="/countries">
            <Button className={classes.backToCountriesButton}>
              Back to Countries
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  ) : (
    <div className={classes.loading}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default CountrySingle;
