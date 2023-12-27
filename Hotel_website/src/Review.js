import React from 'react';
import { review } from './Data';
import quoteImg from './Images/quote-img.png';
import './review.css';

const Review = () => {
  return (
    <section className='review' id='review'>
      <div className='black-box' id='abt-sec'>
        <h1 className='heading'>
          Customer's <span>Review</span>
        </h1>
      </div>
      <div className='box-container'>
        {review.map((item, index) => (
          <div className='box' key={index}>
            <img src={quoteImg} alt='quotes' className='quote' />
            <p className='description'>{item.des}</p>
            <img src={item.img} alt='img' className='user' />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
