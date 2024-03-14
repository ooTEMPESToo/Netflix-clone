import React, { useState } from "react";
import { MdOutlineSearch } from "react-icons/md";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [display, setDisplay] = useState(false);
  const handleSearch = () => {
    display ? setDisplay(false) : setDisplay(true);
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="flex items-center rounded-full px-3 py-2">
      {display ? (
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full outline-none rounded placeholder:text-white backdrop-blur-xl bg-white/30 text-2xl text-white px-2"
        />
      ) : null}

      <button
        onClick={handleSearch}
        className="ml-2 bg-transparent text-white px-4 py-2 rounded-full"
      >
        <MdOutlineSearch size={30} />
      </button>
    </div>
  );
};

export default SearchBar;
