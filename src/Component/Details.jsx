import React from "react";
import Navbar from "./Navbar";
import Main from "../images/main.jpg";
import { AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
  const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWE5OTU3MTEyN2MzZWZkY2U2Mjk0ZGFkMTI3YTI1YyIsInN1YiI6IjY0ZmVjOWIwZGI0ZWQ2MTAzNDNlZjZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Rd3o-_G81PdtVfr-TaM0AzlY8GjfwWpEUGcgHFlanI`;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", { headers })
      .then((response) => {
        setMovies(response.data.results.slice(0, 8));
        console.log(response.data);
      });
  }, []);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const item = [];
  return (
    <>
      <div>
        <Navbar />
        <div className="mx-4 md:mx-[100px] mt-10">
          <img src={Main} className="w-full h-[300px] md:h-[500px]" />

          <div className="block md:flex mt-20 ">
            <img
              src={Main}
              className="w-full md:w-[400px] h-[200px] md:h-[450px] object-cover pr-10 rounded-xl"
            />
            <div className="w-full mb-10 mt-5 md:mt-0">
              <div className="flex justify-between">
                <h1>Silo</h1>
                <button className="bg-[red] text-white font-bold py-2 px-2 flex items-center rounded-xl">
                  <AiOutlinePlus /> Add to favourite
                </button>
              </div>
              <div className="mt-3 flex items-center">
                <button className="bg-white text-black rounded-xl py-2 px-2 font-bold mr-2 text-[10px] md:text-sm">
                  Drama
                </button>
                <button className="bg-white text-black rounded-xl py-2 px-2 font-bold text-[10px] md:text-sm mr-2">
                  Science Fiction
                </button>
                <div className="flex items-center  md:pl-5 ">
                  <SlCalender size={10} />
                  <h1 className="text-[10px] md:text-sm px-5">2020</h1>
                  <MdOutlineWatchLater size={10} />
                  <h1 className="px-4 text-[10px] md:text-sm">15:30</h1>
                  <AiOutlineStar size={10} />
                  <h1 className="px-4 text-[10px] md:text-sm">8.5</h1>
                </div>
              </div>
              <p className="pt-3 text-[15px]">
                3:12:00 8.0 Home Genre Country Search movies....... Movies
                Series Animation Login/Singup Watch Now Watch Later Avatar: The
                Way of Water Action Adventure Science Fiction 2022 3:12:00 8.5
                Set more than a decade after the events of the first film, learn
                the story of the Sully family (Jake, Neytiri, and their kids),
                the trouble that follows them, the lengths they go to keep each
                other safe, the battles they fight to stay alive, and the
                tragedies
              </p>
              <div className="mt-10">
                <h2 className="pt-5 text-sm">Country : United States</h2>
                <h2 className="pt-3 text-sm">Genre : Drama, Science Fiction</h2>
                <h2 className="pt-3 text-sm">Date : May 05 2023</h2>
                <h2 className="pt-3 text-sm">Production : AMC Studios</h2>
                <h2 className="pt-3 text-sm">
                  Cast : Tim Robbins, Rebecca Ferguson, Avi Nash, <br /> Rashida
                  Jones, David Oyewolo, Tim Robbins
                </h2>
              </div>
            </div>
          </div>
          <div>
            <h1>Season 1</h1>
            <div className="grid grid-cols-2 gap-4 full mt-5">
              <button className="text-white bg-[red] hover:bg-gray-300 hover:text-black font-bold py-2 px-3 rounded-lg">
                Season1
              </button>
              <button className="text-black bg-gray-300 hover:bg-[red] hover:text-white font-bold py-2 px-3 rounded-lg">
                Season1
              </button>
              <button className="text-black bg-gray-300 hover:bg-[red] hover:text-white font-bold py-2 px-3 rounded-lg">
                Season1
              </button>
              <button className="text-black bg-gray-300 hover:bg-[red] hover:text-white font-bold py-2 px-3 rounded-lg">
                Season1
              </button>
            </div>
          </div>
          <div className="mt-10">
            <h1 className="text-2xl font-bold">You may also like</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-5 ">
              {movies?.map((item, i) => (
                <div className="">
                  <div className=" mr-5 hover:scale-105 ease-in-out duration-500 w-{500px} md:w-full">
                    <img
                      src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                      className="rounded-xl h-[150px] md:h-[250px] w-[300px] object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
