import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import CountrySingle from "./components/CountrySingle/CountrySingle";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home countries={countries} />} />
          <Route
            path="countries"
            element={<Countries loading={loading} countries={countries} />}
          />
          <Route
            path="countries/:name"
            element={<CountrySingle countries={countries} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
