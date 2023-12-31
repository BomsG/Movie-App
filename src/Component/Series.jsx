import React from "react";
import Main from "../images/main2.webp";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Series = () => {
  const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWE5OTU3MTEyN2MzZWZkY2U2Mjk0ZGFkMTI3YTI1YyIsInN1YiI6IjY0ZmVjOWIwZGI0ZWQ2MTAzNDNlZjZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Rd3o-_G81PdtVfr-TaM0AzlY8GjfwWpEUGcgHFlanI`;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/tv/popular", { headers })
      .then((response) => {
        setMovies(response.data.results.slice(6, 9));
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
          <h1 className="text-xl font-bold">New Release - Series</h1>
          <Link to="Slist">
            <h2 className="font-bold text-gray-500 text-sm flex items-center hover:scale-105 duration-500">
              View All <AiOutlineArrowRight />
            </h2>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-5">
          {movies?.map((item, i) => (
            <div className="">
              <div className="mr-5 hover:scale-105 ease-in-out duration-500 w-{500px} md:w-full">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  className="rounded-xl h-[150px] md:h-[250px] w-[300px] object-cover"
                />
                <div className="block md:flex justify-center md:justify-between mt-3 items-center ">
                  <h1 className="mr-5 font-bold text-[8px] md:text-[15px] w-full">
                    {item.name}
                  </h1>
                  <div className="flex mt-3 items-center">
                    <button className="bg-[red] rounded-lg text-white text-[8px] font-bold mr-2  py-1 px-3 hover:bg-gray-400">
                      HD
                    </button>
                    <button className="bg-transparent border border-red-500 rounded-lg text-whie text-[10px] font-bold mr-2  py-2 px-2 hover:bg-gray-400">
                      Season_1
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

export default Series;
