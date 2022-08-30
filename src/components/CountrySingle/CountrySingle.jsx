import classes from "./CountrySingle.module.css";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const CountrySingle = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        setCountry(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <Card
      className={classes.single}
      style={{ width: "40rem", height: "20rem", margin: "1rem" }}
    >
      {/* <img className={classes.flag} src={flag} alt={name} /> */}
      <Card.Header style={{ color: "black" }}>
        <h2>Name</h2>
        {/* <h3 className={classes.officialName}>{name.official}</h3> */}
      </Card.Header>
      <Card.Body style={{ color: "black" }}>
        <div></div>
      </Card.Body>
    </Card>
  );
};

export default CountrySingle;
