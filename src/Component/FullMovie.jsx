import React from "react";
import Main from "../images/main2.webp";
import { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Recommended from "./Recommended";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const FullMovie = () => {
  const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWE5OTU3MTEyN2MzZWZkY2U2Mjk0ZGFkMTI3YTI1YyIsInN1YiI6IjY0ZmVjOWIwZGI0ZWQ2MTAzNDNlZjZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Rd3o-_G81PdtVfr-TaM0AzlY8GjfwWpEUGcgHFlanI`;
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", { headers })
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data);
      });
  }, []);
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const item = [];
  return (
    <>
      <Navbar />
      <div className=" mx-3 md:mx-[150px] mt-10 mb-[50px]">
        <Link to="/">
          <h2 className="flex justify-end items-center">
            {" "}
            <AiOutlineArrowLeft /> Back
          </h2>
        </Link>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 ">
          {movies?.map((item, i) => (
            <div className="">
              <div className=" mr-5 hover:scale-105 ease-in-out duration-500 w-{500px} md:w-full">
                <img
                  src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                  className="rounded-xl h-[150px] md:h-[250px] w-[300px] object-cover"
                />
                <h1 className="font-bold text-xl">{item.title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FullMovie;
