import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./Searchbar";

const list = ["Home", "Thrill", "Action", "Anime"];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handelClick = () => {
    nav ? setNav(false) : setNav(true);
  };

  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handelHome= async()=>{
    try{
      navigate("/home")
    }catch(error){
      console.log(error)
    }
  }
  // console.log(user.email)
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <div className="flex flex-row gap-2 justify-center items-center">
        {user?.email ? (
          <div>
            {!nav ? (
              <RxHamburgerMenu
                onClick={handelClick}
                className=" text-white cursor-pointer "
                size={40}
              />
            ) : (
              <div className="text-white h-screen ease-in-out duration-300 w-[300px] top-0 left-0 fixed backdrop-blur-xl bg-black/30">
                <div className="border-b-2 p-2 flex flex-row items-center ">
                  <button onClick={handelHome} className="text-red-600  my-2 py-2 px-4 text-4xl font-bold cursor-pointer">
                    NETFLIX
                  </button>
                  <IoCloseOutline
                    onClick={handelClick}
                    className="ease-in-out duration-300 cursor-pointer relative flex float-end "
                    size={45}
                  />
                </div>
                <div>
                  <ul className="flex flex-col text-center h-screen scroll-py-0 w-full backdrop-blur-xl ">
                    {list.map((items, id) => (
                      <li
                        key={id}
                        className="font-bold backdrop-blur-xl  text-3xl py-4"
                      >
                        {items}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        ) : null}

        
          <button className="text-red-600 text-4xl font-bold cursor-pointer">
            NETFLIX
          </button >
        
      </div>

      {user?.email ? (
        <div className="flex flex-row justify-center items-center">
          <SearchBar />
          <Link to="/account">
            <button className="text-white pr-4">
              <div className=" rounded bg-white">
                <img
                  className="object-cover h-10 w-10 rounded "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT__guYjud0s1cH5vbRMowAcuEttsewPQmUsg&usqp=CAU"
                  alt=""
                />
              </div>
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
