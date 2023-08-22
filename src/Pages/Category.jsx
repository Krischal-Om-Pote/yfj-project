import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Mehendi from "../Components/Mehendi.jsx";
import MarriageComponent from "../Components/MarriageComponent";
import { Button } from "antd";
// import OtherComponent from "../Components/OtherComponent";

const Category = () => {
  const allComponents = [<MarriageComponent key="marriage" />, <Mehendi key="videographer" />];
  const [filteredComponents, setFilteredComponents] = useState(allComponents);

  const handleFilterButtonClick = (componentName) => {
    if (componentName === "all") {
      setFilteredComponents(allComponents);
    } else {
      const filtered = allComponents.filter((component) => {
        return component.type.name === componentName;
      });
      setFilteredComponents(filtered);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="mt-4">
      <Button onClick={() => handleFilterButtonClick("all")}>
        Show All
      </Button>
      <Button className="ml-2" onClick={() => handleFilterButtonClick("MarriageComponent")}>
        Filter for Marriage
      </Button>
      <Button className="ml-2" onClick={() => handleFilterButtonClick("Videographer")}>
        Filter for Videographer
      </Button>
      {/* <Button onClick={() => handleFilterButtonClick("OtherComponent")}>
        Filter for Other Component
      </Button> */}
      {filteredComponents}
      </div>
    </div>
  );
};

export default Category;
