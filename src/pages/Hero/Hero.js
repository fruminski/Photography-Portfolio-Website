//import React, { useRef, useState } from "react";
import hero1 from "../../img/Ewelina Ruminska - Melania 2.jpg";
import hero2 from "../../img/Ewelina Ruminska - Flora 8.jpg";
import hero3 from "../../img/Ewelina Ruminska - Flora BW 12.jpg";
import hero4 from "../../img/Ewelina Ruminska - Liza 26.jpg";
import hero5 from "../../img/Ewelina Ruminska - Flora 2.jpg";
import hero6 from "../../img/Ewelina Ruminska  - Naomy.jpg";

import "./Hero.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade } from "swiper/modules";

const heros = [hero1, hero2, hero3, hero4, hero5, hero6];

function Hero() {
  return (
    <div className="hero">
      <Swiper
        spaceBetween={30}
        speed={3000}
        calculateWidth={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        modules={[Autoplay, EffectFade]}
        effect={"fade"}
      >
        {" "}
        {[1, 2, 3, 4, 5, 6].map((i, el) => {
          return (
            <SwiperSlide>
              <div className="img">
                <img src={heros[el]} alt="hero" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Hero;
