import React, { Component } from "react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import heroImg from "../images/Rectangle 2.png";
import main2 from "../images/main2.webp";
import main from "../images/main2.webp";
import { BiCaretRightCircle } from "react-icons/bi";
import { BsFillStopwatchFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import axios from "axios";
import Loading from "./Loading";
import Update from "./Update";
import Recommended from "./Recommended";
import Card from "./Card";
import Series from "./Series";
import Rseries from "./Rseries";
import Release from "./Release";

const Carousel = () => {
  const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWE5OTU3MTEyN2MzZWZkY2U2Mjk0ZGFkMTI3YTI1YyIsInN1YiI6IjY0ZmVjOWIwZGI0ZWQ2MTAzNDNlZjZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Rd3o-_G81PdtVfr-TaM0AzlY8GjfwWpEUGcgHFlanI`;
  const [movies, setMovies] = useState([]);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/tv/popular", { headers })
      .then((response) => {
        setMovies(response.data.results.slice(1, 9));
        console.log(response.data);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "50px",
          padding: "30px",
          position: "relative",
          bottom: "100px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const item = [
    {
      imgSrc: heroImg,
      title: "Avatar: The Way of Water",
      button: " Watch Movie",
      description:
        " Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), thetrouble that follows them, the lengths they go to keep each othersafe, the battles they fight to stay alive, and the tragedies they endure.",
    },
  ];
  const li = ["Action", "Adventure", "Science-Fiction"];
  return (
    <>
      <div>
        <Slider {...settings}>
          {movies?.map((item, i) => (
            <div className="relative w-full h-[80vh] md:h-[100vh] flex  mt-3 md:mt-5 bg-blue-900/30">
              <div className="flex justify-center">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  className=" absolute -z-10 w-[100%] h-[100vh]  object-cover bg-center bg-cover "
                />
              </div>
              <div className="flex justify-center pt-[80px] md:pt-[150px]">
                <button className="text-[12px] md:text-xl bg-[red] text-white font-bold py-3 px-3 rounded-sm flex items-center hover:bg-red-300">
                  Watch Now <BiCaretRightCircle color="white" size={20} />
                </button>
                <button className="text-[12px] md:text-xl ml-4 border-2 border-red-600 font-bold py-3 px-3 rounded-sm flex items-center hover:bg-red-300">
                  Watch Later
                  <BsFillStopwatchFill color="white" className="ml-2" />
                </button>
              </div>
              <div className=" p-0 md:pl-20 pt-10 ">
                <h1 className=" font-bold text-4xl  text-center md:text-left">
                  {item.name}
                </h1>
                <div className="flex flex-wrap items-center justify-center md:justify-start">
                  {li.map((li) => (
                    <button className="bg-white rounded-xl text-black text-sm font-bold mr-2 mt-5 py-2 px-2 hover:bg-gray-400">
                      {li}
                    </button>
                  ))}
                  <div className="flex items-center pt-5 pl--0 md:pl-5 ">
                    <SlCalender size={20} />
                    <h1 className="text-xl px-5">{item.release_date}</h1>
                    <MdOutlineWatchLater size={20} />
                    <h1 className="px-4 text-xl">{item.vote_count}</h1>
                    <AiOutlineStar size={20} />
                    <h1 className="px-4 text-xl">{item.vote_average}</h1>
                  </div>
                </div>
                <p className="w-full md:w-[700px] text-sm md:text-lg pt-5 text-center md:text-left">
                  {item.overview}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Update />
      <Card />
      <Release />
      <Series />
      <Recommended />
      <Rseries />
    </>
  );
};
export default Carousel;
