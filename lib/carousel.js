import React, { useState } from "react";
import "./styles.css";

export const Carousel = ({
  images: items,
  rightArrowBtnCls = "",
  leftArrowBtnCls = ""
}) => {
  const imagesCount = items.length;
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
        <div onClick={prevSlide} className={`${leftArrowBtnCls}`}>
          <div>{"<"}</div>
        </div>
      </div>
      <div className="carousel-content">
        {items.map((item, idx) => {
          let classes = "";
          if (idx !== currentIndex) {
            classes += " hide";
          } else {
            classes += " animate";
          }
          return (
            <div className={classes} key={idx}>
              {item}
            </div>
          );
        })}
      </div>
      <div className="carousel-arrow">
        <div onClick={nextSlide} className={`${rightArrowBtnCls}`}>
          {">"}
        </div>
      </div>
    </div>
  );
};
