import React from "react";

import Carousel from "./Component/Carousel";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Component/Details";
import FullMovie from "./Component/FullMovie";
import FullSeries from "./Component/FullSeries";
import DetailsMovies from "./Component/DetailsMovies";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Carousel />} />
          <Route path="details/:movieId" element={<Details />} />
          <Route path="detailsMovies/:movieId" element={<DetailsMovies />} />
          <Route path="list" element={<FullMovie />} />
          <Route path="Slist" element={<FullSeries />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
