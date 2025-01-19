import "./App.css";
import React from "react";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
import Nav from "./pages/Nav/Nav";
import Main2 from "./pages/Main/Main2";
import Footer from "./pages/Footer/Footer";
import Hero from "./pages/Hero/Hero";

function App() {
  ReactGA.initialize("G-W09DBNGFVG");
  return (
    <div className="home">
      <div>
        <Helmet>
          <title>Ewelina Kucharska Ruminska</title>
          <meta
            name="description"
            content="Ewelina Kucharska Ruminska, London based freelance portrait & fashion photographer."
          />
        </Helmet>
      </div>
      <Nav />
      <Hero />
      <Main2 />
      <Footer />
    </div>
  );
}

export default App;
