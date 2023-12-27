import React from "react";
import './Navbar.css';

const Navbar = () => {
  return (
    <body>
         <div class="background"></div>
      <header className="header">
        <img src="Logo.png" alt="logo" className="logo"></img>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#abt-sec">About</a>
          <a href="#menu">Menu</a>
          <a href="#review">Review</a>
        </nav>
      </header>
    </body>
  );
};

export default Navbar;
