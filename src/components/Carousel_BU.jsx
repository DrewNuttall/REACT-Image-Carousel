import React, { useState, useId, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
    console.log("carousel test useEffect");
    //setIsLoading(false);
    //setIsLoading(false);
    //titleArea.style.display = "block";
    //reloadArea.style.display = "block";
  }, []);

  return (
    <>
      <div className="carousel">
        {data.map((item, idx) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
              onLoad={console.log("onload")}
            />
          );
        })}
        <BsArrowLeftCircleFill
          className="arrow arrow-left"
          onClick={prevSlide}
        />
        <BsArrowRightCircleFill
          className="arrow arrow-right"
          onClick={nextSlide}
        />
        <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
              ></button>
            );
          })}
        </span>
      </div>
    </>
  );
};
