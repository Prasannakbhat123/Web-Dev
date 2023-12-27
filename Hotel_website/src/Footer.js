import React from 'react';
import facebook from "./Images/facebook.png";
import instagram from "./Images/instagram.png";
import twitter from "./Images/twitter.png";
import linkedin from "./Images/linkedin.png";
import printerest from "./Images/pinterest.png";
import './footer.css'

const Footer = () => {
  return (
 <section className='footer'>
    <div className='share'>
        <a href='/'><img src={facebook} alt='img' className='icons'></img></a>
        <a href='/'><img src={instagram} alt='img' className='icons'></img></a>
        <a href='/'><img src={twitter} alt='img' className='icons'></img></a>
        <a href='/'><img src={linkedin} alt='img' className='icons'></img></a>
        <a href='/'><img src={printerest} alt='img' className='icons'></img></a>
    </div>
    <div className='links'>
      <a href='#home' alt='link'>Home</a>
      <a href='#About-us' alt='link'>About</a>
      <a href='#menu' alt='link'>Menu</a>
      <a href='#review' alt='link'>Review</a>
      </div>
      <div className='credit'>
          Created by <span>Prasanna</span>
      </div>
 </section>
  )
}

export default Footer
