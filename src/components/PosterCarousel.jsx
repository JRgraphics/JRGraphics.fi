import React, { useState } from "react";

import { useSelector } from "react-redux";

// Components
import Carousel from "react-spring-3d-carousel";

// Constants
import { slides } from "../constants";
import PosterZoom from "./PosterZoom";

const PosterCarousel = () => {
  // State hooks
  const [posterZoom, setPosterZoom] = useState(null);
  const [goToSlide, setGoToSlide] = useState(0);

  // Reducers
  const blurStatus = useSelector((state) => state.style.blur);

  return (
    <>
      <div className={"carousel-container " + (!!blurStatus ? "blur " : "")}>
        <Carousel
          slides={slides.map((slide, index) => {
            return {
              ...slide,
              onClick: () => {
                if (index === goToSlide) {
                  setPosterZoom(index);
                } else {
                  setGoToSlide(index);
                }
              },
            };
          })}
          offsetRadius={
            window.innerWidth > 800 ? 4 : window.innerWidth > 600 ? 2 : 1
          }
          goToSlide={goToSlide}
        />
      </div>
      {posterZoom !== null ? (
        <PosterZoom image={posterZoom} onClose={() => setPosterZoom(null)} />
      ) : null}
    </>
  );
};
export default PosterCarousel;
