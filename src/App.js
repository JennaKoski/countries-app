import React, { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./components/Home/Home";
import Countries from "./components/Countries/Countries";
import CountrySingle from "./components/CountrySingle/CountrySingle";
import Favorites from "./components/Favorites/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { saveToLocalStorage } from "./features/countries/cartSlice";

const App = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    saveToLocalStorage(favorites);
  }, [dispatch, favorites]);

  const scrollVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setScroll(true);
    } else if (scrolled <= 300) {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", scrollVisible);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  return (
    <>
      {scroll && (
        <button className="backToTop" onClick={backToTop}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            fill="currentColor"
            className="bi bi-arrow-up-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
          </svg>
        </button>
      )}
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
    </>
  );
};

export default App;
