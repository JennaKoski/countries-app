import classes from "./CountrySingle.module.css";
import Card from "react-bootstrap/Card";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CountrySingle = () => {
  const location = useLocation();
  const country = location.state;
  const [weather, setWeather] = useState([]);
  const APIkey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&appid=${APIkey}`
      )
      .catch((error) => console.log(error))
      .then((res) => setWeather(res.data));
  }, []);

  console.log(weather);

  return (
    <div className={classes.singleContainer}>
      <Card
        className={classes.single}
        style={{ width: "50rem", height: "32rem", margin: "1rem" }}
      >
        <img
          className={classes.flag}
          src={country.flags.svg}
          alt={country.name.common}
        />
        <Card.Header style={{ color: "black" }}>
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
              <p className="pr-3">Currency: </p>
              <p>
                {Object.values(country.currencies || {}).map((value, i) => (
                  <span key={i}>{(i ? ", " : "") + value.name}</span>
                ))}
              </p>
            </div>
            <div className={classes.parts}>
              <p className="pr-3">Population: </p>
              <p>{country.population}</p>
            </div>
          </div>
          <div className={classes.weather}>
            <p>Weather: {weather.main.temp}</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CountrySingle;
