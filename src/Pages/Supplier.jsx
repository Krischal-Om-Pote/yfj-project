import React , { useState }  from "react";
import Navbar from "../Components/Navbar";
import Photographer from "../Components/Photographer";
import Videographer from "../Components/Videographer";

const Supplier = () => {

  return (
    <div>
      <Navbar />
      <Photographer/>
      <Videographer/>
    </div>
  );
};

export default Supplier;
