import axios from "axios";
import React, { useEffect, useState } from "react";
import request from "../Request";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [movie, setMovies] = useState([]);
  const movies = movie[Math.floor(Math.random() * movie.length)];

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };
  const [video, setvideo] = useState("A");
  const [type, setType] = useState("Movie");
  useEffect(() => {
    if (movies?.adult === false) {
      setvideo("U-18");
    }
  }, []);
  const [show,setShow]=useState(false);
  const handleShow=()=>{
    show?setShow(true):setShow(false);
  }
  useEffect(() => {
    if (movies?.movie === false) {
      setType("Show");
    }
  }, []);

  return (
    <>
      <div className="w-full h-[550px] flex flex-col text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${movies?.backdrop_path}`}
            alt={movies?.title}
          />
          <div className="absolute top-[20%] w-full p-4 md:p-8">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                {movies?.title}
              </h1>
              <ul className="flex flex-row gap-2 text-[15px]">
                <li className="bg-gray-300 rounded px-1 my-1">
                  <span className="text-black text-[12px]">
                    {movies?.release_date}
                  </span>
                </li>
                <li className="bg-gray-300 rounded px-1 my-1">
                  <span className="text-black text-[12px]">{video}</span>
                </li>
                <li className="bg-gray-300 rounded px-1 my-1">
                  <span className="text-black text-[12px]">{type}</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-400 text-sm">
              Released : {movies?.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w[50%] xl:max-w-[35%] text-gray-200">
              {truncateString(movies?.overview, 150)}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="w-[200px] md:w-[250px] lg:w-[400px] sm:w-[200px] outline-none p-2 rounded-lg text-black text-xl my-2"
                type="email"
                placeholder="Email address"
              />
              <button className="bg-red-600 sm:w-[90px] md:w-[140px] lg:w-[190px] rounded-md w-[200px] my-2 py-3 ml-4 mx-auto">
                <Link to="/signup">Get Started</Link>
              </button>
            </div>
          </div>
        </div>

        <div className=" justify-center items-center max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Enjoy on your TV</h1>
            <h4>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </h4>
          </div>
          <img
            className="w-[600px] sm:w-[200px] md:[300px] lg:w-[550px] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
            alt=""
          />
        </div>
        <div className="flex flex-col px-4">
          <h1 className="text-2xl  px-8 ">More reasons to join</h1>
          <div className="max-w-[1240px] gap-8 mx-auto grid md:grid-cols-4 ">
            <div className="w-full shadow-xl my-4 flex flex-col rounded-lg p-4 ease-in-out transition hover:scale-105 bg-gradient-to-r from-blue-950 to-red-900">
              <h1 className="text-2xl font-bold text-left">Enjoy on your TV</h1>
              <p className="py-4 text-[15px] md:text-xl sm:text-[15px]">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </p>
              <img src="" alt="" />
            </div>
            <div className="w-full shadow-xl my-4 flex flex-col rounded-lg p-4 ease-in-out transition hover:scale-105 bg-gradient-to-r from-blue-950 to-red-900">
              <h1 className="text-2xl font-bold text-left">
                Download your shows to watch offline
              </h1>
              <p className="py-4 text-[15px] md:text-xl sm:text-[15px]">
                Save your favourites easily and always have something to watch.
              </p>
              <img src="" alt="" />
            </div>
            <div className="w-full shadow-xl my-4 flex flex-col rounded-lg p-4 ease-in-out transition hover:scale-105 bg-gradient-to-r from-blue-950 to-red-900">
              <h1 className="text-2xl font-bold text-left">Watch everywhere</h1>
              <p className="py-4 text-[15px] md:text-xl sm:text-[15px]">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop and TV.
              </p>
              <img src="" alt="" />
            </div>
            <div className="w-full shadow-xl my-4 flex flex-col rounded-lg p-4 ease-in-out transition hover:scale-105 bg-gradient-to-r from-blue-950 to-red-900">
              <h1 className="text-2xl font-bold text-left">Create profiles for kids</h1>
              <p className="py-4 text-[15px] md:text-xl sm:text-[15px]">
                Send kids on adventures with their favourite characters in a
                space made just for them — free with your membership.
              </p>
              <img src="" alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
