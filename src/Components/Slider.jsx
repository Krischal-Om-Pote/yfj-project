import React from "react";
import { Carousel, Button } from "antd";

const contentStyle = {
  height: "200px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
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
          className=" mt-4 w-[1100px] "
          dots={true}
          ref={carouselRef}
        >
          <div>
            <h3 style={contentStyle}>
              Slide 1 - Description of the first slide
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              Slide 2 - Description of the second slide
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              Slide 3 - Description of the third slide
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              Slide 4 - Description of the fourth slide
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
