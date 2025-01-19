import React from "react";
import "./Main.css";
import ScrollToTop from "react-scroll-up";
import arrow from "../../img/arrow-up.png";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const gallery = require.context("../../img/Gallery", true);

let imageGallery = gallery.keys().map((image) => gallery(image));

const slides = imageGallery.map((imageSrc) => ({
  src: imageSrc
}));

console.log(imageGallery);

function Main2() {
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
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={3} gutter="10px">
            {imageGallery.map((image, index) => (
              <img
                onClick={() => handleClick(index)}
                key={index}
                src={image}
                alt="random"
                style={{ width: "100%", display: "block" }}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
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

export default Main2;
