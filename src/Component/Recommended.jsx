import React from "react";
import Main from "../images/main2.webp";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";

const Recommended = () => {
  const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWE5OTU3MTEyN2MzZWZkY2U2Mjk0ZGFkMTI3YTI1YyIsInN1YiI6IjY0ZmVjOWIwZGI0ZWQ2MTAzNDNlZjZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Rd3o-_G81PdtVfr-TaM0AzlY8GjfwWpEUGcgHFlanI`;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/tv/popular", { headers })
      .then((response) => {
        setMovies(response.data.results.slice(0, 3));
        console.log(response.data);
      });
  }, []);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const item = [];
  return (
    <>
      <div className=" mx-3 md:mx-[150px] mt-10">
        <div className="flex justify-between w-[90%] mdw-[900px] ">
          <div className="flex">
            <h1 className="text[10px] md:text-xl font-bold mr-2">Recommeded</h1>
            <button className="bg-[red] rounded-lg text-white text-[5px] md:text-[8px] font-bold mr-2  py-2 px-2 hover:bg-gray-400">
              Movies
            </button>
            <button className="bg-transparent border border-red-500 rounded-lg text-whie text-[5px] md:text-[8px] font-bold mr-2  py-2 px-2 hover:bg-gray-400">
              Series
            </button>
            <button className="bg-transparent border border-red-500 rounded-lg text-whie text-[5px] md:text-[8px] font-bold mr-2  py-2 px-2 hover:bg-gray-400">
              Animations
            </button>
          </div>
          <h2 className="font-bold text-gray-500 text-sm flex items-center hover:scale-105 duration-500">
            View All <AiOutlineArrowRight />
          </h2>
        </div>

        <div className="flex mt-5">
          {movies?.map((item, i) => (
            <div className="">
              <div className="mr-5 hover:scale-105 ease-in-out duration-500 w-{500px} md:w-full">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  className="rounded-xl h-[150px] md:h-[250px] w-[300px] object-cover"
                />
                <div className="block md:flex justify-center md:justify-between mt-3 items-center ">
                  <h1 className="mr-5 font-bold text-[8px] md:[10px] w-full">
                    {item.name}
                  </h1>
                  <div className="flex">
                    <button className="bg-[red] rounded-lg text-white text-[5px] font-bold mr-2  py-1 px-3 hover:bg-gray-400">
                      HD
                    </button>
                    <button className="bg-transparent border border-red-500 rounded-lg text-whie text-[5px] font-bold mr-2  py-2 px-2 hover:bg-gray-400">
                      {item.first_air_date}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommended;
