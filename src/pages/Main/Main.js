import React from "react";
import "./Main.css";
import ScrollToTop from "react-scroll-up";
import arrow from "../../img/arrow-up.png";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

const gallery = require.context("../../img/Gallery", true);

let imageGallery = gallery.keys().map((image) => gallery(image));

const slides = imageGallery.map((imageSrc) => ({
  src: imageSrc
}));

console.log(imageGallery);

function Main() {
  const [index, setIndex] = useState(-1);

  const handleClick = (index) => {
    setIndex(index);
  };

  return (
    <div className="main">
      <ScrollToTop showUnder={200} duration={400}>
        <span>
          <img class="arrow" src={arrow} alt="arrow" />
        </span>
      </ScrollToTop>

      <div className="img-container">
        {imageGallery.map((image, index) => (
          <img
            onClick={() => handleClick(index)}
            key={index}
            id={index}
            src={image}
            alt="random"
          />
        ))}
      </div>

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
}

export default Main;
