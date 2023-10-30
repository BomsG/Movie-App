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

const Carousel = () => {
  const apiKey = `https://api.themoviedb.org/3/movie/top_rated?api_key=4c75c05966be2f9ad7d0c95e79df2726&language=en-US&page=1`;
  const [movies, setMovies] = useState([]);

  // useEffect(() => {
  //   axios.get(`${apiKey}`).then((response) => {
  //     setMovies(response.data);
  //   });
  // }, []);
  // console.log(movies.results);

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
          {movies?.results?.map((item, i) => (
            <div className="relative w-full h-[100vh] flex flex-col bg-blue-900/30 mt-3 md:mt-5">
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                className=" absolute -z-10 w-[100%] h-[50vh]  object-cover bg-cover bg-center "
              />
              <div className="flex justify-center pt-[80px] md:pt-[150px]">
                <button className="text-[12px] md:text-xl bg-[red] text-white font-bold py-3 px-3 rounded-sm flex items-center hover:bg-red-300">
                  Watch Movie <BiCaretRightCircle color="white" size={20} />
                </button>
                <button className="text-[12px] md:text-xl ml-4 border-2 border-red-600 font-bold py-3 px-3 rounded-sm flex items-center hover:bg-red-300">
                  Watch Movie
                  <BsFillStopwatchFill color="white" className="ml-2" />
                </button>
              </div>
              <div className=" p-0 md:pl-20 pt-10 ">
                <h1 className=" font-bold text-4xl  text-center md:text-left">
                  {item.title}
                </h1>
                <div className="flex flex-wrap items-center">
                  {li.map((li) => (
                    <button className="bg-white rounded-xl text-black text-sm font-bold mr-2 mt-5 py-2 px-2 hover:bg-gray-400">
                      {li}
                    </button>
                  ))}
                  <div className="flex items-center pt-5 pl--0 md:pl-5 ">
                    <SlCalender size={20} />
                    <h1 className="text-xl px-5">2022</h1>
                    <MdOutlineWatchLater size={20} />
                    <h1 className="px-4 text-xl">3:12:00</h1>
                    <AiOutlineStar size={20} />
                    <h1 className="px-4 text-xl">8.5</h1>
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
    </>
  );
};
export default Carousel;
