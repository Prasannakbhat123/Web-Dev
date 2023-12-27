import React from "react";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>
        <span>Hotel Nirvana : </span>Savor South India's culinary charm
        </h3>
        <p>
          Indulge in the fiery allure of South Indian cuisine at Hotel Nirvana.
          Our kitchen crafts each dish with a touch of warmth, serving up
          flavorful delights that embody the heart and soul of this rich
          culinary tradition.
        </p>
        <a href="#menu" className="btn">
          Get Yours Now
        </a>
      </div>
    </section>
  );
};

export default Home;
