import React from "react";
import "./About.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import img from "../../img/Ewelina Ruminska - Ewelina 1.jpg";

function About() {
  return (
    <div>
      <Nav />
      <div className="about">
        <img src={img} alt="Ewelina Ruminska" />
        <div className="text">
          <p>Polish born, London based, travelling anywhere.</p>
          <p>Unobtrusive, capturing genuine emotions.</p>
          <p>Especially keen on portraiture.</p>
          <p>Not a fan of fast fashion.</p>
          <p>Golden hour obsessed.</p>
          <p>
            <b>All in for diversity.</b>
          </p>
          <p>Grunge girl.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
