import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import CountrySingle from "./components/CountrySingle/CountrySingle";
import Favorites from "./components/Favorites/Favorites";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:name" element={<CountrySingle />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
