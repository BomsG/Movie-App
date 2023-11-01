import React from "react";
import Navbar from "./Component/Navbar";
import Carousel from "./Component/Carousel";
import Card from "./Component/Card";
import Update from "./Component/Update";
import Release from "./Component/Release";

function App() {
  return (
    <div>
      <Navbar />

      <Carousel />
      <Update />
      <Card />
      <Release />
    </div>
  );
}

export default App;
