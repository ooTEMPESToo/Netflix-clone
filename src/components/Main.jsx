import React, { useEffect, useState } from "react";
import request from "../Request";
import axios from "axios";
const Main = () => {
  const [movie, setMovies] = useState([]);
  const movies = movie[Math.floor(Math.random() * movie.length)];

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  //console.log(movies)

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
          alt={movies?.title}
        />
        <div className="absolute top-[20%] w-full p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">{movies?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border  text-white border-gray-300 ml-4 py-2 px-5">
              Watch later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released : {movies?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movies?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
