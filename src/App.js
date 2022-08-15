import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="countries" element={<Countries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
