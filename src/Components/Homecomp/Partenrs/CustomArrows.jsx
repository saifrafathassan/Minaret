import React from 'react';
import leftArrow from '/Assets/images/partnrs/arawl.png'
import rightArrow from '/Assets/images/partnrs/arawr.png'

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={rightArrow}
      alt="Next"
      className={className}
      style={{ ...style, display: 'block', width: '1rem', height: '1.2rem' }}
      onClick={onClick}
    />
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <img
      src={leftArrow}
      alt="Previous"
      className={className}
      style={{ ...style, display: 'block',width: '1rem', height: '1.2rem'}}
      onClick={onClick}
    />
  );
};
