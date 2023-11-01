import React from "react";

import Navbar from "./Component/Navbar";
import Carousel from "./Component/Carousel";
import Card from "./Component/Card";
import Update from "./Component/Update";
import Release from "./Component/Release";
import Series from "./Component/Series";
import Recommended from "./Component/Recommended";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Component/Details";
import FullMovie from "./Component/FullMovie";
import FullSeries from "./Component/FullSeries";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Carousel />} />
        <Route path="Details" element={<Details />} />
        <Route path="list" element={<FullMovie />} />
        <Route path="Slist" element={<FullSeries />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
