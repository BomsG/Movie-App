import React from "react";
import Main from "../images/main.jpg";
import { useEffect, useState, Component } from "react";
import Slider from "react-slick";
import axios from "axios";

const Update = () => {
  const accessToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWE5OTU3MTEyN2MzZWZkY2U2Mjk0ZGFkMTI3YTI1YyIsInN1YiI6IjY0ZmVjOWIwZGI0ZWQ2MTAzNDNlZjZjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1Rd3o-_G81PdtVfr-TaM0AzlY8GjfwWpEUGcgHFlanI`;
  const [movies, setMovies] = useState([]);

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  useEffect(() => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular", { headers })
      .then((response) => {
        setMovies(response.data.results.slice(0, 6));
        console.log(response.data);
      });
  }, []);

  const item = [];

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="ml-4 md:ml-[120px]">
        <h2> Responsive </h2>

        <div className="my-4 flex ">
          {movies?.map((item, i) => (
            <div className="flex mx-3 items-center">
              <img
                src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
                className="w-[50px] h-[80px] rounded-xl object-cover"
              />
              <div className="ml-3 ">
                <h1 className="text-[8px]">{item.title}</h1>
                <p className="text-[8px]">{item.release_date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// return (
//   <div className="mx-3 md:mx-[150px] ">
//
//       <div className="my-5  flex ml-4">
//         {movies?.map((item, i) => (
//           <div className="flex mx-3 items-center">
//             <img
//               src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
//               className="w-[50px] h-[80px] rounded-xl object-cover"
//             />
//             <div className="ml-3 ">
//               <h1 className="text-[8px]">{item.title}</h1>
//               <p className="text-[8px]">{item.release_date}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//
//   </div>
// );

export default Update;
