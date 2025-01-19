import React from "react";
import "./Contact.css";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

function Contact() {
  return (
    <div>
      <Nav />
      <div className="contact-container">
        <div className="contact">
          <p>DIRECT</p>
          <p>Ewelina Kucharska Ruminska</p>
          <a href="mailto:info@ewelinaruminska.com">info@ewelinaruminska.com</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
