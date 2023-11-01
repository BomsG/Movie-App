import React from "react";
import Main from "../images/main2.webp";
import { useEffect, useState } from "react";
import axios from "axios";

const Release = () => {
  const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWE5OTU3MTEyN2MzZWZkY2U2Mjk0ZGFkMTI3YTI1YyIsInN1YiI6IjY0ZmVjOWIwZGI0ZWQ2MTAzNDNlZjZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Rd3o-_G81PdtVfr-TaM0AzlY8GjfwWpEUGcgHFlanI`;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated?", { headers })
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
        <h1 className="text-xl font-bold">New Release - Movies</h1>
        <div className="flex mt-5">
          {movies?.map((item, i) => (
            <div className="">
              <div className="mr-5 hover:scale-105 ease-in-out duration-500 w-{500px} md:w-full">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
                  className="rounded-xl h-[150px] md:h-[250px] w-[300px] object-cover"
                />
                <div className="block md:flex justify-center md:justify-between mt-3  ">
                  <h1 className="mr-5 font-bold text-sm">{item.title}</h1>
                  <div>
                    <button className="bg-[red] rounded-lg text-white text-[8px] font-bold mr-2  py-2 px-2 hover:bg-gray-400">
                      Action
                    </button>
                    <button className="bg-[red] rounded-lg text-whie text-[8px] font-bold mr-2  py-2 px-2 hover:bg-gray-400">
                      Comedy
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

export default Release;
