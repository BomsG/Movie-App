import React from "react";
import Main from "../images/main2.webp";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Recommended = () => {
  const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWE5OTU3MTEyN2MzZWZkY2U2Mjk0ZGFkMTI3YTI1YyIsInN1YiI6IjY0ZmVjOWIwZGI0ZWQ2MTAzNDNlZjZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Rd3o-_G81PdtVfr-TaM0AzlY8GjfwWpEUGcgHFlanI`;
  const [movies, setMovies] = useState([]);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", {
        headers,
      })
      .then((response) => {
        const movie = response.data.results.slice(0, 3);

        movie.map((item) => {
          axios
            .get(
              `https://api.themoviedb.org/3/movie/${item.id}?language=en-US`,
              {
                headers,
              }
            )
            .then((response) => {
              console.log(response);
              setMovies((prevMovie) => [...prevMovie, response.data]);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
  }, []);
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
          <Link to="list">
            <h2 className="font-bold text-gray-500 text-sm flex items-center hover:scale-105 duration-500">
              View All <AiOutlineArrowRight />
            </h2>
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-5">
          {movies?.map((item, i) => (
            <div className="" key={i}>
              <Link to={`/DetailsMovies/${item.id}`} key={item.id}>
                <div className="mr-5 hover:scale-105 ease-in-out duration-500 w-{500px} md:w-full">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    className="rounded-xl h-[150px] md:h-[250px] w-[300px] object-cover"
                  />
                  <div className="block md:flex justify-center md:justify-between mt-3 items-center ">
                    <h1 className="mr-5 font-bold text-[8px] md:text-[15px] w-full">
                      {item.title}
                    </h1>
                    <div className="flex items-center">
                      <button className="bg-[red] rounded-lg text-white text-[5px] md:text-[10px] font-bold mr-2  py-1 px-3 hover:bg-gray-400">
                        HD
                      </button>
                      <button className="bg-transparent border border-red-500 rounded-lg text-whie text-[5px] md:text-[8px] font-bold mr-2  py-2 px-2 hover:bg-gray-400">
                        {item.release_date}
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommended;
