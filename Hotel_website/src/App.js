import React from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Menu from './Menu'
import Review from './Review'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <div className="content">
        <div className="main-content">
          <About />
        </div>
      </div>
      <Menu/>
      <Review/>
      <Footer/>
    </div>
  );
}

export default App;
