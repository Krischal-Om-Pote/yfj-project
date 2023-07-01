import React from "react";
import Navbar from "../Components/Navbar";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex mt-4 ml-10 ">Snapshots</div>
      <Slider />
      <div className="mt-4 flex justify-center ">
        <div className="w-[1100px] bg-blue-500 h-[200px] rounded shadow-lg flex">
          <div className="flex justify-start items-center p-10 w-[300px]">
            <div>
              <h2 className="text-xl font-bold">
                Our 2 years of achievements with our super powers
              </h2>
              <div className="text-sm">We have reached this</div>
            </div>
          </div>
          <div className="flex justify-end p-10 w-[800px]">
            <div className="grid grid-cols-2 gap-1">
              <div className="p-2 bg-white rounded">as;dkfasdf</div>
              <div className="p-2 bg-white rounded">fasdkfasd</div>
              <div className="p-2 bg-white rounded">fasdkfasd</div>
              <div className="p-2 bg-white rounded">fasdkfasd</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
