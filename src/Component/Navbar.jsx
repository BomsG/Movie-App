import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const list = ["Home", " Genre", "Country"];
  const list2 = ["Movies", "Series", "Animation", "Login/Singup"];
  const mainLi = [
    "Home",
    " Genre",
    "Country",
    "Movies",
    "Series",
    "Animation",
    "Login/Singup",
  ];

  return (
    <>
      <div className="flex items-center justify-none md:justify-center mt-5 mx-5 ">
        <ul className="flex">
          {list.map((list) => (
            <li className="mr-2 hover:border-b hover:border-red-600 hidden md:block">
              {list}
            </li>
          ))}
        </ul>
        <div className="border border-2-white w-[80%] md:w-[30%] px-2 rounded-full justify-between flex items-center bg-white">
          <input
            type="search"
            placeholder="search"
            className=" focus:outline-none py-1 px-2  bg-transparent text-black w-full"
            name="search"
            id="search"
          />
          <AiOutlineSearch id="search" color="black" />
        </div>
        <ul className="flex mr-3">
          {list2.map((list2) => (
            <li className="ml-2 hidden md:block">{list2}</li>
          ))}
        </ul>
        <select className="border border-white bg-transparent font-bold block md:hidden w-[50px]">
          {mainLi.map((mainLi) => (
            <option value="movie" className="bg-black">
              {mainLi}
            </option>
          ))}
        </select>
        <IoIosNotificationsOutline size={20} />
      </div>
    </>
  );
};

export default Navbar;
