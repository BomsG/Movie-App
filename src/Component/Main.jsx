import React from "react";
import { BsFillStopwatchFill } from "react-icons/bs";
import { BiCaretRightCircle } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import toggleImage from "../images/toggle.png";

const Main = () => {
  const li = ["Action", "Adventure", "Science-Fiction"];

  const item = [
    { title: "Avatar: The Way of Water" },
    {
      description:
        " Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), thetrouble that follows them, the lengths they go to keep each othersafe, the battles they fight to stay alive, and the tragedies they endure.",
    },
  ];
  return (
    <>
      <div className="main mt-3 md:mt-5  w-full pb-2">
        <div className="">
          <div className="flex justify-center pt-[80px] md:pt-[150px]">
            <button className="text-[12px] md:text-2xl bg-[red] text-white font-bold py-3 px-3 rounded-sm flex items-center hover:bg-red-300">
              Watch Movie <BiCaretRightCircle color="white" size={20} />
            </button>
            <button className="ml-4 border-2 border-red-600 font-bold py-3 px-3 rounded-sm flex items-center hover:bg-red-300">
              Watch Movie <BsFillStopwatchFill color="white" className="ml-2" />
            </button>
          </div>
          <div className=" p-0 md:pl-20 pt-10 ">
            {item.map((item) => (
              <h1 className="font-bold text-4xl  text-center md:text-left">
                {item.title}
              </h1>
            ))}

            {li.map((li) => (
              <div className="flex flex-wrap items-center">
                <button className="bg-white rounded-xl text-black text-sm font-bold mr-2 mt-5 py-2 px-2 hover:bg-gray-400">
                  {li}
                </button>
                <div className="flex items-center pt-5 pl--0 md:pl-5">
                  <SlCalender size={20} />
                  <h1 className="text-xl px-5">2022</h1>
                  <MdOutlineWatchLater size={20} />
                  <h1 className="px-4 text-xl">3:12:00</h1>
                  <AiOutlineStar size={20} />
                  <h1 className="px-4 text-xl">8.5</h1>
                </div>
              </div>
            ))}

            {item.map((item) => (
              <p className="w-full md:w-[700px] text-sm md:text-lg pt-5 text-center md:text-left">
                {item.description}
              </p>
            ))}
          </div>
          <div className="flex justify-center pt-20">
            <img src={toggleImage} className="w-[100px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
