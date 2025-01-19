import React from "react";
import "./Footer.css";
import icoIN from "../../img/Instagram Logo.png";
import icoLI from "../../img/Linkedin Logo.webp";
import icoDO from "../../img/the dots logo bw new .jpg";

function Portfolio() {
  return (
    <div className="footer">
      <div className="social">
        <a href="https://www.instagram.com/ruminskaphotographs/">
          <img width="40" height="40" src={icoIN} alt="insta" />
        </a>
        <a href="https://www.linkedin.com/in/ewelina-ruminska/">
          <img width="30" height="30" src={icoLI} alt="LinkedIn" />
        </a>
        <a href="https://the-dots.com/users/ewelina-ruminska-762426">
          <img width="30" height="30" src={icoDO} alt="The" />
        </a>
      </div>
      <div>
        <p>© All rights reserved</p>
        <p>Ewelina Kucharska Ruminska</p>
      </div>
      <div className="mail">
        <a href="mailto:info@ewelinaruminska.com">info@ewelinaruminska.com</a>
      </div>
    </div>
  );
}

export default Portfolio;
