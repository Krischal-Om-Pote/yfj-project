import React from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mt-4 ml-10">Snapshots</div>
      <Slider />
      <div className="mt-4 flex justify-center">
        <div className="w-full sm:w-[1100px] bg-[#1976D2] h-[200px] rounded shadow-lg flex">
          <div className="flex justify-start items-center p-4 sm:p-10 w-full sm:w-[300px] text-white">
            <div>
              <h2 className="text-lg sm:text-xl font-bold">
                Our 2 years of achievements with our super powers
              </h2>
              <div className="text-xs sm:text-sm">We have reached this</div>
            </div>
          </div>
          <div className="flex justify-end p-4 sm:p-10 w-full sm:w-[800px]">
            <div className="grid grid-cols-2 gap-1">
              <div className="p-2 bg-white rounded flex justify-center">
                <img src="../public/image/events.png" alt="" width="40px" />
              </div>
              <div className="p-2 bg-white rounded flex justify-center">
                <img
                  src="../public/image/event-management.png"
                  alt=""
                  width="40px"
                />
              </div>
              <div className="p-2 bg-white rounded flex justify-center">
                <img
                  src="../public/image/opening-ceremony.png"
                  alt=""
                  width="40px"
                />
              </div>
              <div className="p-2 bg-white rounded flex justify-center">
                <img
                  src="../public/image/time-management.png"
                  alt=""
                  width="40px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="ml-10 mt-5">
          <img
            className="rounded w-[300px] h-[400px]"
            src="../public/image/banner.jpeg"
            alt=""
          />
        </div>
        <Link to="/signup">
        <div className="p-4 mt-[150px] border h-20 items-center rounded-lg cursor-pointer hover:bg-slate-500">
          <PersonAddIcon className="text-black text-2xl mr-2 animate-bounce" />
          <div className="text-black font-semibold text-lg">
            Set up your profile
          </div>
        </div>
        </Link>
        <div className="mt-5 mr-10">
          <img
            className="rounded w-[300px] h-[400px]"
            src="../public/image/banner1.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
