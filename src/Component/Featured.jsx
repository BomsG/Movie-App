import React from "react";
import Main from "../images/main2.webp";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Recommended from "./Recommended";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Featured = () => {
  const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWE5OTU3MTEyN2MzZWZkY2U2Mjk0ZGFkMTI3YTI1YyIsInN1YiI6IjY0ZmVjOWIwZGI0ZWQ2MTAzNDNlZjZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Rd3o-_G81PdtVfr-TaM0AzlY8GjfwWpEUGcgHFlanI`;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/tv/top_rated", {
        headers,
      })
      .then((response) => {
        const movie = response.data.results.slice(0, 5);

        movie.map((item) => {
          axios
            .get(`https://api.themoviedb.org/3/tv/${item.id}?language=en-US`, {
              headers,
            })
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
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const item = [];
  return (
    <>
      <div className=" mx-3 md:mx-[150px] lg:mx-[50px] mt-10 mb-[50px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 mt-5 ">
          {movies?.map((item, i) => (
            <div className="" key={i}>
              <Link to={`/details/${item.id}`} key={item.id}>
                <div className=" mr-5 hover:scale-105 ease-in-out duration-500 w-{500px} md:w-full">
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                    className="rounded-xl h-[150px] md:h-[250px] w-[300px] object-cover"
                  />
                  <h1 className="font-bold text-sm md:text-[15px]">
                    {item.name}
                  </h1>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Featured;
