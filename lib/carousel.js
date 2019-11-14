import React, { useState } from "react";

import "./styles.css";

export const Carousel = ({ images }) => {
  const imagesCount = images.length;
  const [currentIndex, setIndex] = useState(0);
  console.log(currentIndex);

  const nextSlide = () => {
    if (currentIndex + 1 === imagesCount) {
      setIndex(0);
      return;
    }
    setIndex(currentIndex + 1);
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setIndex(imagesCount - 1);
      return;
    }
    setIndex(currentIndex - 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-arrow">
        <div onClick={prevSlide}>
          <div>{"<"}</div>
        </div>
      </div>
      <div className="carousel-content">
        {images.map((imgSrc, idx) => {
          let classes = "";
          if (idx !== currentIndex) {
            classes += " hide";
          } else {
            classes += " animate";
          }
          return (
            <img className={classes} src={imgSrc} key={idx} alt={imgSrc} />
          );
        })}
      </div>
      <div className="carousel-arrow">
        <div onClick={nextSlide}>{">"}</div>
      </div>
    </div>
  );
};
