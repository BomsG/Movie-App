import React from "react";
import Navbar from "./Navbar";

import { AiOutlinePlus, AiOutlineStar } from "react-icons/ai";
import { MdOutlineWatchLater } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Featured from "./Featured";

const Details = () => {
  const { movieId } = useParams();
  const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWE5OTU3MTEyN2MzZWZkY2U2Mjk0ZGFkMTI3YTI1YyIsInN1YiI6IjY0ZmVjOWIwZGI0ZWQ2MTAzNDNlZjZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Rd3o-_G81PdtVfr-TaM0AzlY8GjfwWpEUGcgHFlanI`;
  const [movies, setMovies] = useState([]);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${movieId}`, {
        headers,
      })
      .then((response) => {
        setMovies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(movies);

  const item = [];
  return (
    <>
      <div>
        <Navbar />
        <div className="mx-4 md:mx-[100px] mt-10">
          <img
            src={`https://image.tmdb.org/t/p/original${movies?.backdrop_path}`}
            className="w-full h-[300px] md:h-[500px]"
          />

          <div className="block md:flex mt-20 ">
            <img
              src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`}
              className="w-full md:w-[400px] h-[200px] md:h-[450px] object-cover pr-10 rounded-xl"
            />
            <div className="w-full mb-10 mt-5 md:mt-0">
              <div className="flex justify-between">
                <h1>{`${movies?.title}`}</h1>
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
              <p className="pt-5 text-[15px]">{`${movies?.overview}`}</p>
              <div className="mt-5">
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
            <div className="grid grid-cols-2 gap-4 mt-5">
              <button className="text-white bg-[red] hover:bg-gray-300 hover:text-black font-bold py-2 px-3 rounded-lg">
                Season1
              </button>
              <button className="text-black bg-gray-300 hover:bg-[red] hover:text-white font-bold py-2 px-3 rounded-lg">
                Season2
              </button>
              <button className="text-black bg-gray-300 hover:bg-[red] hover:text-white font-bold py-2 px-3 rounded-lg">
                Season3
              </button>
              <button className="text-black bg-gray-300 hover:bg-[red] hover:text-white font-bold py-2 px-3 rounded-lg">
                Season4
              </button>
            </div>
          </div>
        </div>
      </div>
      <Featured />
    </>
  );
};

export default Details;
