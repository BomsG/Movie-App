import React from "react";
import Main from "../images/main2.webp";

const Card = () => {
  const item = [
    {
      imageSrc: Main,
      title: "modelia",
    },
  ];
  return (
    <>
      <h1>Trending</h1>
      {item.map((item) => {
        <div>
          <h1 className="text-white">{item.title}</h1>
        </div>;
      })}
    </>
  );
};

export default Card;
