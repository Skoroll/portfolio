import React, { useState } from "react";
import "./Carrousel.scss";

function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carrousel">
      <button className="carrousel__btn--prev" onClick={prevSlide} aria-label="Image précédente">{<i className="fa-solid fa-arrow-left"></i>}</button>
      <img
        className="carrousel__image"
        src={images[currentIndex]}
        alt={`${currentIndex + 1}`}
      />
      <button className="carrousel__btn--next" onClick={nextSlide} aria-label="Image suivante">{<i className="fa-solid fa-arrow-right"></i>}</button>
    </div>
  );
}

export default Carrousel;
