// Menu.js
import React from 'react';
import './Menu.css';
import { menu } from './Data.js';

const Menu = () => {
  return (
    <div className="black-box" id="abt-sec">
      <section className='menu' id='menu'>
        <h1 className='heading'>Our <span>Menu</span></h1>
        <div className='box-container'>
          {menu.map((item, index) => (
            <div className='box' key={index}>
              <img src={item.img} alt={item.name} />
              <h3>{item.name}</h3>
              <div className='price'>
                Rs. {item.price}
              </div>
              <a className='btn' href='/'>Add To Cart</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;
