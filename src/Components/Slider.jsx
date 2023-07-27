import React from "react";
import { Carousel, Button } from "antd";

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
};

const Slider = () => {
  const carouselRef = React.useRef(null);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  return (
    <>
      <div className="flex justify-center">
        <Carousel
          autoplay
          className=" mt-4 w-[1100px]"
          dots={true}
          ref={carouselRef}
        >
          <div className="rounded-lg">
            <h3 style={contentStyle}>
              <img src="../public/image/banner2.jpeg" className="w-full" style={{ marginTop: '-80px' , borderRadius:'10px'}}/>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src="../public/image/banner4.jpeg" className="w-full" style={{ marginTop: '-80px' , borderRadius:'10px'}}/>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src="../public/image/banner3.jpeg" className="w-full" style={{ marginTop: '-300px' , borderRadius:'10px'}}/>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src="../public/image/banner6.jpeg" className="w-full" style={{ marginTop: '-400px' , borderRadius:'10px'}}/>
            </h3>
          </div>
        </Carousel>
      </div>
      <div className="flex justify-center" style={{ textAlign: "center", marginTop: "20px" }}>
        <Button onClick={handlePrev}>Previous</Button>
        <Button onClick={handleNext} style={{ marginLeft: "10px" }}>
          Next
        </Button>
      </div>
    </>
  );
};

export default Slider;
